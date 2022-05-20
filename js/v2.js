function store(currentTab) {
  document.activeElement.blur();
  try {
    sessionStorage.setItem('fhir-resource-tab-index', currentTab);
  } catch(exception) {}
}

$(document).ready(function(){
  var xml_editors = $('.codemirror-textarea-xml').toArray();
  for (var xml_editor of xml_editors) {
    CodeMirror.fromTextArea(xml_editor, {
      readOnly :    true,
      lineNumbers : true,
      tabSize :     2,
      mode :        'xml'
    });
  };
  $('.v2_tabs').tabs({
    active: 0,
    activate: function( event, ui ) { store(ui.newTab.index()); }
  });
  // $( '#tabs' ).tabs('option', 'active', currentTab);
});
