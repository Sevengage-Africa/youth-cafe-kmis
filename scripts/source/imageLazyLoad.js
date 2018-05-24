/* ---------------------------------------------
	LazyLoad JS Loader and Config
	- https://github.com/verlok/lazyload
------------------------------------------------*/

(function(w, d, YCAFE){

	var b = d.getElementsByTagName('body')[0],
		s = d.createElement("script"),
		v = !("IntersectionObserver" in w) ? "8.7.1" : "10.5.2";

	s.async = true;
	s.src = "/scripts/lib/lazyload-"+ v +".min.js";

	w.lazyLoadOptions = {};
	b.appendChild(s);


	// Get the instance and puts it in the YCAFE.Lazyload instance when the script finishes
	window.addEventListener('LazyLoad::Initialized', function (e) {
    	YCAFE.Lazyload = e.detail.instance;
	}, false);

}(window, document, window.YCAFE));