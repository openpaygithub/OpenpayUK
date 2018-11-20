var openpayUtils = (function () {
    var PAGE_SIZE_OFFSET = 21;
    var API_HOST = 'https://edf6f0c232.execute-api.ap-southeast-2.amazonaws.com/prod/';
    var API_BRANDS = 'Brands';
    var categoryIdMap = {
        209002: 'Health & wellbeing',
        209003: 'Fashion',
        209004: 'Lifestyle',
        209007: 'Beauty',
        209008: 'Trades & services',
        209001: 'Automotive',
        209005: 'Home & garden',
        209006: 'Dental',
        209009: 'Sports &amp; Outdoors'
    };

    var availabilityEnum = ['Online Store', 'In Store', 'Online And In Store'];

    function parseParams(str) {
        if (str.trim() === '') return {};

        return str.split('&').reduce(function (params, param) {
            var paramSplit = param.split('=').map(function (value) {
                return decodeURIComponent(value.replace(/\+/g, ' '));
            });
            params[paramSplit[0]] = paramSplit[1];
            return params;
        }, {});
    }

    function modifySearchParams(patch) {
        if (!history.pushState || !Object.assign) return console.error('Update your browser');

        var currentParams = parseParams(location.search.substring(1));
        var newParams = Object.assign({}, currentParams, patch);
        var path = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + $.param(newParams);

        window.history.pushState({path: path}, '', path);
    }

    function populateControls() {
        var currentParams = parseParams(location.search.substring(1));
        if (currentParams.CategoryID) $('#category').val(currentParams.CategoryID);
        if (currentParams.Keyword) $('#query').val(currentParams.Keyword);
        if (currentParams.RetailerAvailability) {
            switch (currentParams.RetailerAvailability) {
                case 'All':
                    $('#online').prop('checked', true);
                    $('#in-store').prop('checked', true);
                    break;
                case 'Online':
                    $('#online').prop('checked', true);
                    break;
                case 'InStore':
                    $('#in-store').prop('checked', true);
                    break;
                default:
                    console.error('Unrecognized retailer availability param', currentParams.RetailerAvailability);
                    break;
            }
        }
        if (currentParams.SuburbName) $('#city').val(currentParams.SuburbName);
    }

    function createBrandItem(brand) {
        var path = window.location.protocol + "//" + window.location.pathname.split('/').slice(0, -1).join('/');
        var url = path + '/shop.brand.html?BrandID=' + brand.brandID;
        var item = $('<a class="brand" href="' + url + '"></a>');
        var title = $('<h2>' + brand.brandName +'</h2>');
        var retailerAvailability = $('<p>'+ availabilityEnum[brand.retailerAvailability] + ' · ' + 'Home & Garden' +'</p>');

        item.append(title, retailerAvailability);

        return item;
    }

    function notEmpty(val) {
        if (typeof val === 'string') {
            return !!val.trim();
        }

        return !!val;
    }

    function createRetailerItem(brand) {
        var address = [brand.locationName, brand.storeAddress1, brand.storeAddress2, brand.storePostCode]
            .filter(notEmpty)
            .join(', ');
        var item = $('<a class="brand" href=""></a>');
        var title = $('<h2>' + brand.brandName +'</h2>');
        var retailerAvailability = $('<p>'+ address +'</p>');

        item.append(title, retailerAvailability);

        return item;
    }

    function createEmptyView() {
        var empty = document.createElement('div');

        empty.className = 'empty';
        empty.innerText = 'There is no results for given search query';

        return empty;
    }

    function setDefaultPageSize() {
        modifySearchParams({PageSize: PAGE_SIZE_OFFSET});
    }

    function maybeSetDefaultCity() {
        var currentParams = parseParams(location.search.substring(1));
        if (!currentParams.SuburbName) modifySearchParams({SuburbName: 'Melbourne'});
    }

    function setNextPageSize() {
        var params = parseParams(location.search.substring(1));

        modifySearchParams({PageSize: parseInt(params.PageSize, 10) + PAGE_SIZE_OFFSET});
    }

    function getSearchResultsHeading(id) {
        var maybeHeading = categoryIdMap[id];

        if (maybeHeading) return maybeHeading;

        return 'Search results';
    }

    function searchBrands(options) {
        $('#promotions').hide();
        $('#categories-grid').hide();
        $('#featured').hide();
        $('#load-more').hide();
        $('#results').html('');
        $('#search-results').show();
        $('#loader').show();
        if (options && options.loadMore) {
            setNextPageSize();
        } else {
            setDefaultPageSize();
        }

        maybeSetDefaultCity();

        var currentParams = parseParams(location.search.substring(1));

        $('#search-results-heading').text(getSearchResultsHeading(currentParams.CategoryID));

        $.ajax({
            url: API_HOST + API_BRANDS + '?' + location.search.substring(1)
        }).done(function (e) {
            $('#loader').hide();
            $('#search-results-count').text(e.length);
            if (e.length === 0) return $('#results').html(createEmptyView());
            if (e.length === parseInt(currentParams.PageSize, 10)) $('#load-more').show();
            $('#results').html(e.map(createBrandItem));
        });
    }

    function getRetailerAvailability() {
        var isOnline = $('#online').prop('checked');
        var isInStore = $('#in-store').prop('checked');

        if (isOnline && isInStore) return 'All';
        if (isOnline) return 'Online';
        if (isInStore) return 'InStore';

        return '';
    }

    function handleChangeRetailerAvailability() {
        modifySearchParams({RetailerAvailability: getRetailerAvailability()});
        searchBrands();
    }

    function fetchCurrentBrand() {
        const params = parseParams(location.search.substring(1));

        if (!params.BrandID) {
            return console.error('No brand is specified');
        }

        $('#featured-brand').hide();
        $('#search-results-heading').hide();

        $.ajax({
            url: API_HOST + API_BRANDS + '/' + params.BrandID
        }).done(function (e) {
            $('#brand-name').text(e.brandName);
            $('#available-count').text(e.retailerLocations.length);
            $('#locations-count').text(e.retailerLocations.length);
            $('#availability').text(availabilityEnum[e.retailerAvailability]);
            $('#loader').hide();
            $('#url').attr('href', e.url);
            if (!e.url) $('#url').hide();
            $('#featured-brand').show();
            $('#search-results-heading').show();
            if (e.length === 0) return $('#results').html(createEmptyView());
            $('#results').html(e.retailerLocations.map(createRetailerItem));
        });
    }

    return {
        modifySearchParams: modifySearchParams,
        searchBrands: searchBrands,
        handleChangeRetailerAvailability: handleChangeRetailerAvailability,
        parseParams: parseParams,
        populateControls: populateControls,
        fetchCurrentBrand: fetchCurrentBrand
    }
})();
