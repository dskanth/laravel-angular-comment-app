function validate_add_comment() {
	if(jQuery.trim(jQuery("#author").val()) == '') {
		alert("Author cannot be empty");
		jQuery("#author").focus();
		return false;
	}
	else if(jQuery.trim(jQuery("#text").val()) == '') {
		alert("Text cannot be empty");
		jQuery("#text").focus();
		return false;
	}
	return true;
}
