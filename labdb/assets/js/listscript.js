var dataFiles = ['biology.json', 'chemistry.json', 'cs.json', 
	'earthsys.json', 'econ.json','education.json','math.json',
	'physics.json','polisci.json','psych.json'];

var options = {
  valueNames: ['name', 'pi', 'department', 'goals', 'primary', 'secondary', 'website', 'notes', 'category']
};

var labsList = new List('labs', options);

var currentFile = 0;

$.getJSON( "assets/labdata/" + dataFiles[currentFile], getNextFile);

function getNextFile(data) {
  for (var i = 0; i < data.length; i++) {
    data[i]['category'] = dataFiles[currentFile].split('.')[0]
  }
  labsList.add(data);
  currentFile += 1;
  console.log(currentFile);
  console.log(data[0]);
  if (currentFile != dataFiles.length) {
    $.getJSON( "assets/labdata/" + dataFiles[currentFile], getNextFile);
  }
}

$('#filter-category').change(function () {
    var selection = this.value;
    if (selection) {
        labsList.filter(function(item) {
          return (item.values().category == selection);
        });
    } else {
        labsList.filter();
    }
});