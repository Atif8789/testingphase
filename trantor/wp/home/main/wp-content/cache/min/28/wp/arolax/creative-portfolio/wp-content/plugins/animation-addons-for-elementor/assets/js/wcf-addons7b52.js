!function(t){t(window).on("elementor/frontend/init",(function(){t(window).width(),elementorFrontend.config.responsive.activeBreakpoints;var e=elementorModules.frontend.handlers.Base.extend({bindEvents:function(){this.run()},run:function(){var t=this,e=setInterval((function(){t.count_down(e)}),1e3);this.count_down(e)},count_down:function(t){var e=new Date(this.getElementSettings("countdown_timer_due_date")).getTime()-(new Date).getTime(),n=Math.floor(e/864e5),o=Math.floor(e%864e5/36e5),c=Math.floor(e%36e5/6e4),i=Math.floor(e%6e4/1e3);e<0?(clearInterval(t),this.findElement(".wcf--countdown").html(this.time_finish_content())):this.findElement(".wcf--countdown").html(this.timer_content({days:n,hours:o,minutes:c,seconds:i}))},timer_content:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(0!==n.length){var o="";return t.each(n,(function(t,n){var c=e.getElementSettings("countdown_timer_".concat(t,"_label"));o+='<div class="timer-content timer-item-'.concat(t,' "><span class="time-count ').concat(t,'-count">').concat(n,'</span><span class="time-title ').concat(t,'-title">').concat(c,"</span></div>")})),o}},time_finish_content:function(){var t=this.getElementSettings("time_expire_title"),e=this.getElementSettings("time_expire_desc"),n='<div class="countdown-expire">';return t&&(n+='<div class="countdown-expire-title">'.concat(t,"</div>")),e&&(n+='<div class="countdown-expire-desc">'.concat(e,"</div>")),n+="</div>"}});elementorFrontend.hooks.addAction("frontend/element_ready/wcf--contact-form-7.default",(function(e){var n=t(".wpcf7-submit",e),o=n.attr("class");o+=" wcf-btn-default "+t(".wcf--form-wrapper",e).attr("btn-hover"),n.replaceWith((function(){return t("<button/>",{html:t(".btn-icon").html()+n.attr("value"),class:o,type:"submit"})}))})),elementorFrontend.hooks.addAction("frontend/element_ready/wcf--countdown.default",(function(t){elementorFrontend.elementsHandler.addHandler(e,{$element:t})}));elementorFrontend.hooks.addAction("frontend/element_ready/wcf--blog--search--form.default",(function(e){var n=t(".search--wrapper",e),o=t(".toggle--open",e),c=t(".toggle--close",e);o.on("click",(function(t){n.addClass("search-visible")})),c.on("click",(function(t){n.removeClass("search-visible")})),t("input",e).focus((function(){t(".wcf-search-form",e).addClass("wcf-search-form--focus")})),t("input",e).focusout((function(){t(".wcf-search-form",e).removeClass("wcf-search-form--focus")}))}))}))}(jQuery)