
function saveFieldHandler(node)
	{	
	Updated = node.getElementsByTagName("updated")[0].firstChild.nodeValue;
	}	

function saveField(thisField)
	{
	ThisField = thisField.id;
	ThisValue = thisField.value;
	console.log(ThisField + ' - ' + ThisValue);
	addRespHandler('basicajaxresponse', saveFieldHandler);
	ThisSendURL = "/admin/handlers/saveField.php";
	ThisSendXML = "<response><basicajaxrequest><ThisField><![CDATA["+ThisField+"]]></ThisField><ThisValue><![CDATA["+ThisValue+"]]></ThisValue></basicajaxrequest></response>";
	
	sendXML(ThisSendURL,ThisSendXML);
	}	
	
function saveFieldCustomHandler(node)
	{	
	Updated = node.getElementsByTagName("updated")[0].firstChild.nodeValue;
	}	

function saveFieldCustom(ThisField,ThisValue)
	{
	//alert(ThisField + ' - ' + ThisValue);
	addRespHandler('basicajaxresponse', saveFieldCustomHandler);
	ThisSendURL = "/admin/handlers/saveField.php";
	ThisSendXML = "<response><basicajaxrequest><ThisField><![CDATA["+ThisField+"]]></ThisField><ThisValue><![CDATA["+ThisValue+"]]></ThisValue></basicajaxrequest></response>";
	
	sendXML(ThisSendURL,ThisSendXML);
	}		
	
function saveCheckboxFieldHandler(node)
	{	
	Updated = node.getElementsByTagName("updated")[0].firstChild.nodeValue;
	}	

function saveCheckboxField(thisField)
	{
	ThisField = thisField.id;
	ThisValue = thisField.checked;
	if(ThisValue)
		{
		ThisValue=1;
		}
	else
		{
		ThisValue=0;
		}
	//alert(ThisField + ' - ' + ThisValue);
	addRespHandler('basicajaxresponse', saveCheckboxFieldHandler);
	ThisSendURL = "/admin/handlers/saveField.php";
	ThisSendXML = "<response><basicajaxrequest><ThisField><![CDATA["+ThisField+"]]></ThisField><ThisValue><![CDATA["+ThisValue+"]]></ThisValue></basicajaxrequest></response>";
	
	sendXML(ThisSendURL,ThisSendXML);
	}	

function saveHTMLEditorHandler(node)
	{	
	Updated = node.getElementsByTagName("updated")[0].firstChild.nodeValue;
	}	

function saveHTMLEditor(tinyInstance)
	{
		console.log(tinyInstance);
		var ThisField = tinyInstance;
		
		var ed = tinyMCE.get(tinyInstance);
		ed.setProgressState(1);
		window.setTimeout(function() {
		ed.setProgressState(0);
		ThisValue = ed.getContent();				
			
		addRespHandler('basicajaxresponse', saveHTMLEditorHandler);
		ThisSendURL = "/admin/handlers/saveField.php";
		//alert(ThisField);
		ThisSendXML = "<response><basicajaxrequest><ThisField><![CDATA["+ThisField+"]]></ThisField><ThisValue><![CDATA["+ThisValue+"]]></ThisValue></basicajaxrequest></response>";
		
			sendXML(ThisSendURL,ThisSendXML);
			
		}, 3000);
		
		return false;

	}
	
	
function addTagFieldHandler(node)
	{	
	Tags = node.getElementsByTagName("tags")[0].firstChild.nodeValue;
	ID = node.getElementsByTagName("ID")[0].firstChild.nodeValue;
	document.getElementById("Tags-"+ID).innerHTML = Tags;
	//alert(Tags);
	}	

function addTag(saveField)
	{
	ThisField = saveField.id;
	ThisValue = saveField.value;
	
	//alert(ThisField + ' - ' + ThisValue);
	
	addRespHandler('basicajaxresponse', addTagFieldHandler);
	ThisSendURL = "/admin/handlers/addTag.php";
	ThisSendXML = "<response><basicajaxrequest><ThisField><![CDATA["+ThisField+"]]></ThisField><ThisValue><![CDATA["+ThisValue+"]]></ThisValue></basicajaxrequest></response>";
	
	sendXML(ThisSendURL,ThisSendXML);
	}
	
function addTag2(ThisField,ThisValue)
	{
	
	//alert(ThisField + ' - ' + ThisValue);
	
	addRespHandler('basicajaxresponse', addTagFieldHandler);
	ThisSendURL = "/admin/handlers/addTag.php";
	ThisSendXML = "<response><basicajaxrequest><ThisField><![CDATA["+ThisField+"]]></ThisField><ThisValue><![CDATA["+ThisValue+"]]></ThisValue></basicajaxrequest></response>";
	
	sendXML(ThisSendURL,ThisSendXML);
	}	
	
function removeTagFieldHandler(node)
	{	
	Tags = node.getElementsByTagName("tags")[0].firstChild.nodeValue;
	ID = node.getElementsByTagName("ID")[0].firstChild.nodeValue;
	//alert(Tags);
	document.getElementById("Tags-"+ID).innerHTML = Tags;
	}	

function removeTag(system,id,tag)
	{
	//alert(system + ' - ' + id + ' - ' + tag);
	addRespHandler('basicajaxresponse', removeTagFieldHandler);
	ThisSendURL = "/admin/handlers/removeTag.php";
	ThisSendXML = "<response><basicajaxrequest><system><![CDATA["+system+"]]></system><id><![CDATA["+id+"]]></id><tag><![CDATA["+tag+"]]></tag></basicajaxrequest></response>";
	
	sendXML(ThisSendURL,ThisSendXML);
	}		
	
function addSuggestedTagFieldHandler(node)
	{	
	Tags = node.getElementsByTagName("tags")[0].firstChild.nodeValue;
	ID = node.getElementsByTagName("ID")[0].firstChild.nodeValue;
	TableName = node.getElementsByTagName("TableName")[0].firstChild.nodeValue;
	RecordLabel = node.getElementsByTagName("RecordLabel")[0].firstChild.nodeValue;
	
	document.getElementById("Tags-"+ID).innerHTML = Tags;
	document.getElementById(TableName+"-"+RecordLabel+"-"+ID).value = '';
	}	

function addSuggestedTag(ThisField,ThisValue)
	{
	
	//alert(ThisField + ' - ' + ThisValue);
	
	addRespHandler('basicajaxresponse', addSuggestedTagFieldHandler);
	ThisSendURL = "/admin/handlers/addTag.php";
	ThisSendXML = "<response><basicajaxrequest><ThisField><![CDATA["+ThisField+"]]></ThisField><ThisValue><![CDATA["+ThisValue+"]]></ThisValue></basicajaxrequest></response>";
	
	sendXML(ThisSendURL,ThisSendXML);
	}		
	
function addNoteFieldHandler(node)
	{	
	notes = node.getElementsByTagName("notes")[0].firstChild.nodeValue;
	//alert(notes);
	id = node.getElementsByTagName("id")[0].firstChild.nodeValue;
	
	document.getElementById("notes"+id).innerHTML = notes;
	}	

function addNote(system,id)
	{

	t = system + '_note-Type-text-' + system + '_ID-' + id;
	n = system + '_note-Note-text-' + system + '-' + id;
	p = system + '_note-Public-text-' + system + '_ID-' + id;
	
	tv = document.getElementById(t).value;
	//alert(tv);
	nv = document.getElementById(n).value;
	//alert(nv);
	pv = document.getElementById(p).checked;
	//alert(pv);
	//alert(tv + ' - ' + nv + ' - ' + pv);
	if(pv!=1)
		{ 
		pv=0; 
		} 	
	
	//alert(t + ' - ' + n + ' - ' + p);
	
	addRespHandler('basicajaxresponse', addNoteFieldHandler);
	ThisSendURL = "/admin/handlers/addNote.php";
	ThisSendXML = "<response><basicajaxrequest><system><![CDATA["+system+"]]></system><id><![CDATA["+id+"]]></id><tv><![CDATA["+tv+"]]></tv><pv><![CDATA["+pv+"]]></pv><nv><![CDATA["+nv+"]]></nv></basicajaxrequest></response>";
	
	sendXML(ThisSendURL,ThisSendXML);
	}		
	
		
	
function addSuggestedTagFieldHandler(node)
	{	
	Tags = node.getElementsByTagName("tags")[0].firstChild.nodeValue;
	ID = node.getElementsByTagName("ID")[0].firstChild.nodeValue;
	TableName = node.getElementsByTagName("TableName")[0].firstChild.nodeValue;
	RecordLabel = node.getElementsByTagName("RecordLabel")[0].firstChild.nodeValue;
	
	document.getElementById("Tags-"+ID).innerHTML = Tags;
	document.getElementById(TableName+"-"+RecordLabel+"-"+ID).value = '';
	}	
	
function pullBlogContentHandler(node)
	{	
	body = node.getElementsByTagName("body")[0].firstChild.nodeValue;
	body = body.replace(/(\r\n|\n|\r)/gm,"<br />");
	//alert(body);
	id = node.getElementsByTagName("id")[0].firstChild.nodeValue;
	
	document.getElementById("body-"+id).innerHTML = body;
	//alert(document.getElementById("body-"+id).style.display);
	document.getElementById("body-"+id).style.display='';
	}		

function pullBlogContent(table,id)
	{

	if(document.getElementById("body-"+id).style.display=='none')
		{
		addRespHandler('basicajaxresponse', pullBlogContentHandler);
		ThisSendURL = "/admin/handlers/blog-content.php";
		ThisSendXML = "<response><basicajaxrequest><table><![CDATA["+table+"]]></table><id><![CDATA["+id+"]]></id></basicajaxrequest></response>";
		
		sendXML(ThisSendURL,ThisSendXML);
		}
	else{
	document.getElementById("body-"+id).style.display='none';	
	}
	}
	
function pullFeedContentHandler(node)
	{	
	body = node.getElementsByTagName("body")[0].firstChild.nodeValue;
	
	body = body.replace(/(\r\n|\n|\r)/gm,"<br />");
	
	//alert(body);
	id = node.getElementsByTagName("id")[0].firstChild.nodeValue;
	
	document.getElementById("body-"+id).innerHTML = body;
	
	document.getElementById("body-"+id).style.display='';
	}	
	
function pullFeedContent(table,id)
	{
	if(document.getElementById("body-"+id).style.display=='none')
		{
		addRespHandler('basicajaxresponse', pullFeedContentHandler);
		ThisSendURL = "/admin/handlers/feed-content.php";
		ThisSendXML = "<response><basicajaxrequest><table><![CDATA["+table+"]]></table><id><![CDATA["+id+"]]></id></basicajaxrequest></response>";
		
		sendXML(ThisSendURL,ThisSendXML);
		}
	else{
		document.getElementById("body-"+id).style.display='none';	
		}	
	}
	
function pullURLHandler(node)
	{	
	id = node.getElementsByTagName("id")[0].firstChild.nodeValue;
	url = node.getElementsByTagName("url")[0].firstChild.nodeValue;
	
	document.getElementById(id).value = url;
	}	
	
function pullURL(id)
	{
	//alert(id);
	addRespHandler('basicajaxresponse', pullURLHandler);
	ThisSendURL = "/admin/handlers/pull-url.php";
	ThisSendXML = "<response><basicajaxrequest><id><![CDATA["+id+"]]></id></basicajaxrequest></response>";
	
	sendXML(ThisSendURL,ThisSendXML);
	}
	

function autocompleteHandler(node)
	{	
	Updated = node.getElementsByTagName("updated")[0].firstChild.nodeValue;
	}	

function autocomplete(thisField)
	{
	ThisField = thisField.id;
	ThisValue = thisField.value;
	//alert(ThisField + ' - ' + ThisValue);
	addRespHandler('basicajaxresponse', autocompleteHandler);
	ThisSendURL = "/admin/handlers/saveField.php";
	ThisSendXML = "<response><basicajaxrequest><ThisField><![CDATA["+ThisField+"]]></ThisField><ThisValue><![CDATA["+ThisValue+"]]></ThisValue></basicajaxrequest></response>";
	
	sendXML(ThisSendURL,ThisSendXML);
	}	
	
function strikeCuratedHandler(node)
	{	
	Updated = node.getElementsByTagName("updated")[0].firstChild.nodeValue;
	}	

function strikeCurated(thisField)
	{
	ThisField = thisField.id;
	ThisValue = thisField.checked;
	if(ThisValue)
		{
		ThisValue=1;
		}
	else
		{
		ThisValue=0;
		}
	//alert(ThisField + ' - ' + ThisValue);
	addRespHandler('basicajaxresponse', strikeCuratedHandler);
	ThisSendURL = "/admin/handlers/strike-curated.php";
	ThisSendXML = "<response><basicajaxrequest><ThisField><![CDATA["+ThisField+"]]></ThisField><ThisValue><![CDATA["+ThisValue+"]]></ThisValue></basicajaxrequest></response>";
	
	sendXML(ThisSendURL,ThisSendXML);
	}	


function searchItemsHandler(node)
	{	
	Items = node.getElementsByTagName("items")[0].firstChild.nodeValue;
	document.getElementById("Item-Search").innerHTML = Items;
	//SQL = node.getElementsByTagName("sql")[0].firstChild.nodeValue;
	//document.getElementById("Item-SQL").innerHTML = SQL;	
	}	

function searchItems(thisField)
	{
	ThisField = thisField;
	ThisValue = document.getElementById(thisField).value;
	//alert(ThisField + ' - ' + ThisValue);
	
	addRespHandler('basicajaxresponse', searchItemsHandler);
	ThisSendURL = "/admin/handlers/search-items.php";
	ThisSendXML = "<response><basicajaxrequest><ThisField><![CDATA["+ThisField+"]]></ThisField><ThisValue><![CDATA["+ThisValue+"]]></ThisValue></basicajaxrequest></response>";
	
	sendXML(ThisSendURL,ThisSendXML);
	}	
	
function addAPIFieldHandler(node)
	{	
	apis = node.getElementsByTagName("apis")[0].firstChild.nodeValue;
	ID = node.getElementsByTagName("ID")[0].firstChild.nodeValue;
	document.getElementById("API-"+ID).innerHTML = apis;
	//alert(Tags);
	}	

function addAPI(saveField)
	{
	ThisField = saveField.id;
	ThisValue = saveField.value;
	
	//alert(ThisField + ' - ' + ThisValue);
	
	addRespHandler('basicajaxresponse', addAPIFieldHandler);
	ThisSendURL = "/admin/handlers/addAPI.php";
	ThisSendXML = "<response><basicajaxrequest><ThisField><![CDATA["+ThisField+"]]></ThisField><ThisValue><![CDATA["+ThisValue+"]]></ThisValue></basicajaxrequest></response>";
	
	sendXML(ThisSendURL,ThisSendXML);
	}