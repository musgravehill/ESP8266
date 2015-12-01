function elemInView(elem,side){
				if(side=='' || side==undefined) side='both';
				var docViewTop = jQuery(window).scrollTop();
				var docViewBottom = docViewTop + jQuery(window).height();
				var elemTop = 0; elemTop = Number(jQuery(elem).offset().top);
				var elemBottom = elemTop + jQuery(elem).height();
				var viewBottom = (elemBottom <= docViewBottom);
				var viewTop = (elemTop >= docViewTop);
				if(side=='top'){
					if(elemBottom >= docViewTop && elemTop <= docViewBottom
						&& elemBottom <= docViewBottom &&  elemTop >= docViewTop){return 'true';}
				} else {
				if(viewBottom==true && viewTop==true && jQuery(elem).css('opacity')=='0'){
					return 'true';
				} else { 
					return 'false'; 
				}
				}
}

