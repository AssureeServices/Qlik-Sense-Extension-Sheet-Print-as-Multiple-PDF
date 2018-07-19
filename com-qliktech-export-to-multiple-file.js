define(["jquery", "qlik", "./support-files/jspdf", "./support-files/jspdf.plugin.javascript", "./support-files/jspdf.plugin.addimage", "./support-files/html2canvas", "./support-files/jspdf.plugin.from_html"
, "./support-files/jspdf.plugin.sillysvgrenderer", "./support-files/jspdf.plugin.split_text_to_size", "./support-files/jspdf.plugin.standard_fonts_metrics"
, "./support-files/jspdf.min", "./support-files/jspdf.debug", "./support-files/FileSaver"
],

function ($, qlik) {

	var app;
	app = qlik.currApp(this);
	var doc;
	var fileName;
	var field_Name;
	var field_Values = [];
	var field_Value;
	var temp_FieldName;
	var temp1_FieldName;
	var temp_TimeOut;
    var id_Value;   
	var span_id_Value;	
	var tbl_id;
    var i = 0;
    var j = 0;
	temp_TimeOut=0;
    return {
        definition: {
            type: "items",
            component: "accordion",
            items: {
                /* settings: {
                    uses: "settings"
                }, */
                customProperties: {
                    /* component: "expandable-items", */
                    label: "Properties",
                    type: "items",
                    items:
					{
								    id1_Name: {
								        ref: "var_Field_Name",
								        label: "Field Name",
								        type: "string",
								        defaultValue: ""
								    },
									id2_Name: {
								        ref: "var_File_Name",
								        label: "Output File Name",
								        type: "string",
								        defaultValue: "Print Extn Output File"
								    }
					}
                }

            }
        },
        paint: function ($element, layout) {

            temp_FieldName = layout.var_Field_Name;
            fileName = layout.var_File_Name;
            temp1_FieldName = app.field(temp_FieldName);
            temp1_FieldName.getData();

			
			var spanText="Print by ";
			if(layout.var_Field_Name.length > 0)
				spanText="Print by '"+temp_FieldName+"'";

			id_Value=layout.qInfo.qId + "_my_image_automate";
			span_id_Value=layout.qInfo.qId + "_my_span_automate";
			tbl_id==layout.qInfo.qId + "_automate_tbl_ID";
			
            var html =		"<table id='"+tbl_id+"' style='margin-left:10px;'>"+
								"<tr>"+
									"<td>"+
										"<span style='font-size:16px;font-weight:bold;' id='"+span_id_Value+"'><B>"+spanText+"</B></span> "+
									"</td>"+
								"</tr>"+
								"<tr>"+
									"<td align='justify'>"+
										"<img style='padding:13px 0 0 60px;' id='"+id_Value+"' src='/extensions/com-qliktech-export-to-multiple-file/PDF.png' height='50px' width='50px' name='my_image_automate'>"+
									"</td>"+
								"</tr>"+
							"</table>";
						
			

            var container = $("#qv-toolbar-container").html();
			
			
            $element.html(html);
         
            function hideButton($param) {
				$("#"+tbl_id).hide();
				$("#qv-toolbar-container").hide();
                //$(".qv-object-content ng-isolate-scope").hide();   						
                $("div.qv-gridcell-nav.ng-scope.visible").hide();
                $("div.quick-navigation.ng-scope").hide();
                $("div.buttons-end.borderbox").hide();                
                return $param;
            }




            function print() {
               
                html2canvas(hideButton($("body")),
                        {
                            onrendered: function (canvas) {
                               $("#"+tbl_id).hide();
							   
							   $("#qv-toolbar-container").show();
								//$("#exp").show();
								$("div.qv-gridcell-nav.ng-scope.visible").show();
								$("#qv-toolbar-container").show();
								$("div.quick-navigation.ng-scope").show();
								$("div.buttons-end.borderbox").show();
								
							   
							   
							   
                                var imgData = canvas.toDataURL('image/jpeg');
                                doc = new jsPDF('landscape');
                                doc.setProperties({
                                    title: 'AeS Printing Extension Output File',
                                    author: 'Irfan'
                                });		
								//doc.text(15, 10, field_Name+" : "+field_Value);	
								
								//doc.addImage(imgData, 'JPEG', 30, 15, 250, 120, "ScreenShot", "SLOW", 180);
								doc.addImage(imgData, 'PNG', 30, 15, 250, 120, "ScreenShot", "FAST", 360);
								//doc.save("AeS Extension Output File.pdf");
								doc.save(fileName+".pdf");
                                $("#"+tbl_id).show();
                                
                            }
                        }); // html2canvas end
                
            }


            function start_Process() {

				app.field(field_Name).clear();
                app.field(field_Name).selectMatch(field_Values[i], true);
				field_Value=field_Values[i];
				if(field_Value.length < 1)
					field_Value="No Selection ";
                window.setTimeout(print, 1000);		
                 
                if (++i == field_Values.length) {
                    return;
                }
                window.setTimeout(start_Process, 5000);
            }


            $("#"+id_Value).click(
				function (event) {
						
					  var x;
						if (confirm("\nAre you want to continue the printing process by '"+temp_FieldName+"' field ?\n\n") == true) {
							
								temp1_FieldName.rows.forEach(function (value) {
									j = j + 1;
								});
								//alert(j +" > "+"1");
								if (j < 1) {
									alert("Given field name does not exists in this application.");
								}
								else {
								  
									field_Name = temp_FieldName;
									field_Values = [];
									temp1_FieldName.rows.forEach(function (value) {
										field_Values.push(value.qText);
									});
									field_Values.push("");
									//setTimeout(function () { start_Process(); }, 1000);
									start_Process();
								}
						} 
						
						


				} // inbuild function
			); // click event

        }
    };

});
