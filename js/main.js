function displayMobileMenu(){
	var mobileMenuItemsStyles = document.getElementById("mobile-menu-items").style;
	var mobileMenuItemsUlStyles = document.getElementById("mobile-menu-ul").style;
	var mobileMenuCloseBtnStyles = document.getElementById("close-mobile-menu-btn").style;
	
	mobileMenuItemsStyles.display = "block";
	mobileMenuCloseBtnStyles.display = "inline";
	mobileMenuItemsStyles.height = "100vh";
	mobileMenuItemsStyles.width = "100%";
	mobileMenuItemsStyles.animationName = "mobile-menu-open-animation";
	mobileMenuItemsStyles.animationDuration = "2s";
	mobileMenuCloseBtnStyles.animationName = "mobile-menu-ul-open-animation";
	mobileMenuCloseBtnStyles.animationDuration = "5.5s";
	mobileMenuItemsUlStyles.display = "block";
	mobileMenuItemsUlStyles.animationName = "mobile-menu-ul-open-animation";
	mobileMenuItemsUlStyles.animationDuration = "5.5s";
}

function hideMobileMenu(){
	var mobileMenuItemsStyles = document.getElementById("mobile-menu-items").style;
	var mobileMenuItemsUlStyles = document.getElementById("mobile-menu-ul").style;
	var mobileMenuCloseBtnStyles = document.getElementById("close-mobile-menu-btn").style;
	
	
	mobileMenuItemsStyles.animationName = "mobile-menu-close-animation";
	mobileMenuItemsStyles.height = "0";
	mobileMenuItemsStyles.width = "0";
	mobileMenuItemsStyles.animationDuration = "2s";
	mobileMenuItemsUlStyles.display = "none";
	mobileMenuCloseBtnStyles.display = "none";
	
}