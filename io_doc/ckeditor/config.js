/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	config.removePlugins = 'lineheight';
	config.autoGrow_maxHeight = 600;

	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for two toolbar rows.

	config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'editing' ] },
//		{ name: 'forms', groups: [ 'forms' ] },
//		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
//		'/',
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'about', groups: [ 'about' ] }
	];

	config.extraPlugins = 'replaceTagNameByBsquochoai';
	config.extraPlugins='htmlbuttons';
	config.htmlbuttons = [
/*
		{
			name:'button1',
			icon:'web.png',
			html:'<br /><img src="data:image/gif;base64,R0lGODlhFAAUANUgAN/f3wAAABAQEP////8AAOBAQOCvr+CPjxgYGN/g4OBvb+BPT9/Pz+CwsOCfn9/Q0O8/P+BQX+9QUOAwMO9fXwkJCeCwv+9AT+AvL+A/QOBfX+CAgOB/f+BwcOBgYOC/v////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAACAALAAAAAAUABQAAAaPQJBwSCwaj4Nk8kgMOJ9PgWBQVAYA2CxWQAhQh9CwE8AlIL6gAGHNZl+jaHW7fc1OwWKo9l6sYxcGWmRoYFoZDoJ8TVoYHVkJg0Z+DgwHCnuEQnUPFAYNExAFERaKhQAbBQccDQYHHhcIR1caBYIADx8BRgMVCgsMtgAJulUBEsFZxEQDUs3OzcpM0tPUQkEAOw==" style="vertical-align:middle;" /><img src="data:image/gif;base64,R0lGODlhFAAUAP8AAK6trb/T1Pn5+dHR0fr6+vj4+Pv7+/f39/Hx8dLS0s/Pz/b29sfGxtbW1tDQ0PT09Pn4+fz8/Dpyn0FgoIrKnkNqnw1wn0ZzoBmLph6aqDFhpi2BoB5ioo/NnVi+kTlJkmvFlCBAjyVIjxhJkClRmjh+mk5vnURslRhRlkVnmCeHrcnJycvJyczLyc/IxoTBx4zCx2+yzsrLztPwzjumzMzNzdDTzfX//6/ZtarbuDt7uf///6Taro6fsr67uz2ewMTExHfIupzSuguOuzm2cBhKcRpScR9Vbza3bxs6cCEtdSFTdWTCdRJdcg2hchJjcxo4bw6XXSNbZQ6XZQ+rVhepVw6vWEe9aSOvbUq/bgN2ZkG7aDW3aRk6di+6g3HDgwZ5hCI1gQ9rgVW5gimkjCNKjgJ2jiszhig9iHvFiR+ngGK+eSM0exlhey5KeAmNeF/BeC0+fg5+fjayfgeWezZFfDKMfKa10PPz8PTz8PPv8fLv8PLw8PXw8PT38efq8vLx8vDx8ejz8fP18fTu8OXx7u/s7/Dv7+3t7e3m7u7u7vP179Lj8Ors8Prw7/Lx7/Lz7/Lz8vr29vz29vTu9/Dy9vT09vX3+PT09/by+PX69+vv9/Xx9/fz9+/x9vPz8/Tz9Pz6+PX08vPx8/ny8/X19fX29ffw9vr09PP29Pn29OPh3a7I3p/J3tnZ2ZfF29n23JnG4IXJ4eHi4qTQ3uDf3+Li353A2fv4+tPT0/r++fv8++z7+9DS0tfX19jY2Iq42dTU1NXV1f36+dPe4/Ls6urr6+ft6+bo6ePq6vLq6uzs7PTw7N7l7fLu6+/06+zn7MHf6fHy5pLD5+fm597e4+Tm5ebm5r/Z6N3k6Ojr6PHu5/Hv5+vx5/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAN4ALAAAAAAUABQAAAj/AL0ByTVggIMECRT0AuCtocOHrgQIKEDxQKlDARg+fPiLwI4IBgxIDBTghsaN3nwJiEDAAIEDCxAE6MPr5MMGEHa5PGDqAaAAQDOixKkrlKRUlk7p2WPomCCbDYUVGDYJVSdOj7ppg4asEFRvwRbgUpUH1Khi26Q5I3Tpa4IHmgYtesaMEqNWsYBN+zrgk59IkLhligaDliwaQ1SgdIBAVKVlfLC9EAIrBwgvdMBsHIAA0yZlzWIEwTGDx5csVbS4eagAkac/jlj98EChQxo4W6g0EfFwxbVGyfC8yoCEyZoxc7BMKfLBhEMG1BQZI3ULgxMuV8iYEdMGyoQKz2utSaqW6A4HC2+syEGBJsmRDQ9rzLKVzRqxFCGeRDFyRokUInY85AMLLcjggg09xNHFEmyEUUYJaqAkYR0jkKCBDhdIqKE3J0ggYUAAOw==" style="vertical-align:middle;" /><a href="#.pdf" target="_blank">[Link]</a>',
			title:'Add link'
		},{
			name:'button2',
			icon:'tree.png',
			html:'<div><strong>Treeview</strong><strong>&nbsp;</strong><span style="font-size:10px;">(source-code self-explanatory)</span></div><div> &nbsp;</div><!-- ********** TREEVIEW START ********** --><div><script src="jquery.treeview.js"></script><script>$(function() {$("#tree").treeview({collapsed: true,	animated: "medium",	control:"#sidetreecontrol",	persist: "location"});})</script></div><div id="sidetree"><div id="sidetreecontrol"><a href="#">Collapse All</a> | <a href="#">Expand All</a></div><ul class="treeview" id="tree"><li class="expandable"><div class="hitarea expandable-hitarea"></div><strong>Subject 1</strong><ul style="display: none;"><li><a href="#">Link 1.1</a></li><li><a href="#">Link 1.2</a></li><li class="last"><a href="#">Link 1.3</a></li></ul></li><li class="expandable"><div class="hitarea expandable-hitarea"></div><strong><a class="" href="#"><span>Subject 2</span></a></strong><ul style="display: none;"><li class="expandable"><div class="hitarea expandable-hitarea"></div><strong><a href="#">Subject 2.1</a></strong><ul style="display: none;"><li><a href="#">Link 2.1.1</a></li><li><a href="#">Link 2.1.2</a></li><li><a href="#">Link 2.1.3</a></li><li class="last"><a href="#">Link 2.1.4</a></li></ul></li><li class="expandable"><div class="hitarea expandable-hitarea"></div><strong>Subject 2.2</strong><ul style="display: none;"><li class="expandable"><div class="hitarea expandable-hitarea"></div><strong><a href="#">Subject2.2.1</a></strong><ul style="display: none;"><li><a href="#">Link 2.2.1.1</a></li><li><a href="#">Link 2.2.1.2</a></li><li><a href="#">Link 2.2.1.3</a></li><li><a href="#">Link 2.2.1.4</a></li><li><a href="#">Link 2.2.1.5</a></li><li class="expandable lastExpandable"><div class="hitarea expandable-hitarea lastExpandable-hitarea"></div><strong>Subject 2.2.1.6</strong><ul style="display: none;"><li><a href="#">Link 2.2.1.6.1</a></li><li class="last"><a href="#">Link 2.2.1.6.2</a></li></ul></li></ul></li><li class="expandable lastExpandable"><div class="hitarea expandable-hitarea lastExpandable-hitarea"></div><strong>Subject2.2.2</strong><ul style="display: none;"><li><a href="#">Link 2.2.2.1</a></li><li><a href="#">Link 2.2.2.2</a></li><li><a href="#">Link 2.2.2.3</a></li><li class="last"><a href="#">Link 2.2.2.4</a></li></ul></li></ul></li><li class="expandable"><div class="hitarea expandable-hitarea"></div><strong><a href="#">Subject 2.3</a></strong><ul style="display: none;"><li><a href="#">Link 2.3.1</a></li><li><a href="#">Link</a><a href="#"> 2.3.2</a></li><li><a href="#">Link</a><a href="#"> 2.3.3</a></li><li class="expandable lastExpandable"><div class="hitarea expandable-hitarea lastExpandable-hitarea"></div><strong><a href="#">Subject </a><a href="#">2.3.4</a></strong><ul style="display: none;"><li><a href="#">Link 2.3.4.1</a></li><li class="last"><a href="#">Link 2.3.4.1</a></li></ul></li></ul></li><li><a href="#">Link 2.4</a></li><li><a href="#">Link 2.5</a></li><li><a href="#">Link 2.6</a></li><li class="last"><a href="#">Link 2.7</a></li></ul></li><li class="expandable"><div class="hitarea expandable-hitarea"></div><strong><a class="" href="#"><span>Subject 3</span></a></strong><ul style="display: none;"><li class="expandable"><div class="hitarea expandable-hitarea"></div><strong><a href="#">Subject 3.1</a></strong><ul style="display: none;"><li><a href="#">Link 3.1.1</a></li><li><a href="#">Link 3.1.2</a></li><li class="last"><a href="#">Link 3.1.3</a></li></ul></li><li><a href="#">Link 3.2</a></li><li><a href="#">Link 3.3</a></li><li class="last"><a href="#">Link 3.4</a></li></ul></li><li class="last"><a href="#">Link 4</a></li></ul></div><!-- ********** TREEVIEW END ********** -->',
			title:'Tree View (template)'
		},{
			name:'button2',
			icon:'sortable_table.png',
			html:'<div><strong>Sortable table </strong><span style="font-size:10px;">(Source: <a href="http://tablesorter.com/docs/" target="_blank">http://tablesorter.com/docs/</a>)</span></div><div> &nbsp;</div><!-- ********** SORTABLE TABLE START ********** --><script type="text/javascript" src="jquery.tablesorter.js"></script><script type="text/javascript">$(function() {$("table").tablesorter({debug: true});});</script><table class="tablesorter"><thead><tr><th class="header"> column1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th class="header"> column2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th class="header"> column3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th class="header"> column4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th class="header"> column5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th></tr></thead><tbody><tr><td> 1</td><td> 2</td><td> 3</td><td> 4</td><td> 5</td></tr><tr><td> 10</td><td> 20</td><td> 30</td><td> 40</td><td> 50</td></tr><tr><td> 5</td><td> 23</td><td> 0.3</td><td> 33</td><td> 10.5</td></tr></tbody></table><!-- ********** SORTABLE TABLE END ********** -->',
			title:'Sortable Table (template)'
		},{
			name:'button3',
			icon:'codeinsert.png',
			html:'<span><span id="codeinsert_block">&nbsp;</span><textarea id="codeinsert_box" ondblclick="this.style.display=\'none\';document.getElementById(\'codeinsert_block\').innerHTML=this.value;document.getElementById(\'codeinsert_panel\').style.display=\'inline\';" style="font-size:11px;" /></textarea><span style="display:none;" id="codeinsert_panel"><input type="button" ondblclick="document.getElementById(\'codeinsert_block\').parentNode.outerHTML=document.getElementById(\'codeinsert_box\').value;" style="background-color:#00ff00;width:16px;height:16px;" title="double-click to accept" /><input type="button" ondblclick="document.getElementById(\'codeinsert_block\').innerHTML=\'\';document.getElementById(\'codeinsert_box\').style.display=\'inline\';document.getElementById(\'codeinsert_panel\').style.display=\'none\';" style="background-color:#0000ff;width:16px;height:16px;" title="double-click to edit" /><input type="button" ondblclick="document.getElementById(\'codeinsert_block\').parentNode.outerHTML=\'\';" style="background-color:#ff0000;width:16px;height:16px;" title="double-click to remove" /></span></span></span>',
			title:'Magic Code-Block (allows HTML-insert and review)'
		},{
			name:'button4',
			icon:'textbox.png',
			html:'<span><textarea class="quickform"></textarea><input onclick="var all=document.getElementsByClassName(\'quickform\'); var total=all.length; for(x=0;x<total;x++){all[0].parentNode.outerHTML=all[0].value.replace(new RegExp(\'\\n\',\'mg\'),\'<br />\');}" type="button" value="!" style="font-size:7px;" title="converts ALL(!) text-fields to text" /></span>',
			title:'Magic Text-Field (clicking button converts ALL(!) text-fields to text)'
		},{
			name:'button5',
			icon:'selectbox.png',
			html:'<span><select onchange="this.parentNode.innerHTML=this.value.replace(new RegExp(\'\\n\',\'mg\'),\'<br />\');"><option selected="selected" value="">Select...</option><option value=" "></option><option value="n/a">n/a</option><option value="Option1">Option1</option><option value="Option2">Option2</option><option value="Option3">Option3</option></select></span>',
			title:'Magic Selector (selection converts to text)'
		}
*/
	];

	config.extraPlugins = 'codemirror';
		config.codemirror = {
			// Set this to the theme you wish to use (codemirror themes)
			theme: 'default',
			// Whether or not you want to show line numbers
			lineNumbers: true,
			// Whether or not you want to use line wrapping
			lineWrapping: true,
			// Whether or not you want to highlight matching braces
			matchBrackets: true,
			// Whether or not you want tags to automatically close themselves
			autoCloseTags: true,
			// Whether or not you want Brackets to automatically close themselves
			autoCloseBrackets: true,
			// Whether or not to enable search tools, CTRL+F (Find), CTRL+SHIFT+F (Replace), CTRL+SHIFT+R (Replace All), CTRL+G (Find Next), CTRL+SHIFT+G (Find Previous)
			enableSearchTools: true,
			// Whether or not you wish to enable code folding (requires 'lineNumbers' to be set to 'true')
			enableCodeFolding: true,
			// Whether or not to enable code formatting
			enableCodeFormatting: true,
			// Whether or not to automatically format code should be done when the editor is loaded
			autoFormatOnStart: true,
			// Whether or not to automatically format code should be done every time the source view is opened
			autoFormatOnModeChange: true,
			// Whether or not to automatically format code which has just been uncommented
			autoFormatOnUncomment: true,
			// Define the language specific mode 'htmlmixed' for html including (css, xml, javascript), 'application/x-httpd-php' for php mode including html, or 'text/javascript' for using java script only
			mode: 'htmlmixed',
			// Whether or not to show the search Code button on the toolbar
			showSearchButton: true,
			// Whether or not to show Trailing Spaces
			showTrailingSpace: true,
			// Whether or not to highlight all matches of current word/selection
			highlightMatches: true,
			// Whether or not to show the format button on the toolbar
			showFormatButton: true,
			// Whether or not to show the comment button on the toolbar
			showCommentButton: true,
			// Whether or not to show the uncomment button on the toolbar
			showUncommentButton: true,
			// Whether or not to show the showAutoCompleteButton button on the toolbar
			showAutoCompleteButton: true,
			// Whether or not to highlight the currently active line
			styleActiveLine: true
		};

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'About,BidiLtr,BidiRtl,Language,Flash,Smiley,PageBreak,Save,NewPage,Preview,Print,Scayt,CopyFormatting,Blockquote,Styles,Image,scayt';

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;h4;h5;pre';

	// Simplify the dialog windows.
	//config.removeDialogTabs = 'image:advanced;link:advanced';


	config.startupOutlineBlocks = true;
	config.toolbarCanCollapse = true;
	//config.fullPage = true;
	config.undoStackSize = 50;

	config.protectedSource.push( /<\?[\s\S]*?\?>/g );                                           // PHP code
	config.protectedSource.push( /<%[\s\S]*?%>/g );                                             // ASP code
	config.protectedSource.push( /(<asp:[^\>]+>[\s|\S]*?<\/asp:[^\>]+>)|(<asp:[^\>]+\/>)/gi );  // ASP.Net code


	config.pasteFromWordNumberedHeadingToList = true;
	CKEDITOR.config.magicline_putEverywhere = true;
	config.image_removeLinkByEmptyURL = false;
	config.pasteFromWordPromptCleanup = true;

	//config.enterMode = CKEDITOR.ENTER_P;
	//config.enterMode = CKEDITOR.ENTER_DIV;
	//config.enterMode = CKEDITOR.ENTER_BR;
	//config.shiftEnterMode = CKEDITOR.ENTER_P;

	config.allowedContent = true;

	//config.disallowedContent = 'a[target]';            // Sample: (disallow attribute target)
	//config.disallowedContent = 'img{width,height}';    // Sample: (disallow styles width/height)

};
