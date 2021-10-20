// Copyright (c) 2021, Nirali Satapara and contributors
// For license information, please see license.txt

frappe.ui.form.on('Digital signature', {
	setup: function(frm) {
		frm.set_query("entity", function() {
			return {"filters": {
				'docstatus': 1
			}};
		});
	}
});