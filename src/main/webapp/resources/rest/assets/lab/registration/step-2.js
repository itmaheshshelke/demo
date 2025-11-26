var flag = false;

function validate_step2() {
	console.log($("#payIdOnline").attr('checked'))
	var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
	if ($("#payIdOnline").attr('checked') == 'checked') {
		flag = true;
	}

	if (flag == false) {

		$("#payIderr").show();
		$("#payIderr").text("Select Any Payment Type.");
		setTimeout(function() {
			$('#payIderr').fadeOut('fast');
		}, 5000);
		return false;
	}

	/* online type */
	if ($('input[value = "2"]').is(":checked")) {
		if ($("#labTypeId").val() == 0) {
			$("#labTypeIderr").show();
			$("#labTypeIderr").text("Please Select Lab Type.");
			setTimeout(function() {
				$('#labTypeIderr').fadeOut('fast');
			}, 5000);
			return false;
		} else {
			$("#labTypeIderr").hide();
		}
	}
}
