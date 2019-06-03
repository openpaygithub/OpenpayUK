(function () {
    const pagesList = [
      '/', 
      '/index', 
      '/business',
      '/contact',
      '/faq',
      '/get-in-touch',
      '/legal',
      '/works',
      '/landingpage',
      '/404',
    //   '/C:/openpay/OpenpayUK/src/404.html',
    //   '/C:/openpay/OpenpayUK/src/index.html',
    //   '/C:/openpay/OpenpayUK/src/faq.html',
    //   '/C:/openpay/OpenpayUK/src/legal.html'
    ];
  
    if(!pagesList.includes(window.location.pathname)) {
      window.location.pathname = '404';
    }
}());