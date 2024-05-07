document.addEventListener('DOMContentLoaded', () => {
    const uuid = document.getElementById('ochreContainer').getAttribute('data-uuid');
    const ochre_url = "https://ochre.lib.uchicago.edu/ochre?uuid=";
    const link = ochre_url + uuid;
    loadXML();
  
    function loadXML() {
      requestXML(link, {redirect: 'follow'});
      console.log('loadXML -- OK');
    }
  
    function requestXML(link) {
      var connect = new XMLHttpRequest();
      connect.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          parseXML(this.responseXML);
        }
      };
      connect.open("GET", link, true);
      connect.send();
      console.log('requestXML -- OK');
    };
  
    function parseXML(sourceXML) {
      var textTitle = sourceXML.getElementsByTagName('identification');
      var title_string = document.createTextNode(textTitle[1].textContent);
      document.getElementById('title').appendChild(title_string);
  
      if (sourceXML.getElementsByTagName('resource')[0].getAttribute("format") == 'image/jpeg') {
        var img = document.createElement('img');
        var src = link + "&preview";
        img.src = src;
        document.getElementById('preview').appendChild(img);
      }
    }
  });