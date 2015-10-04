var options = {
  valueNames: ['name', 'pi', 'department', 'goals', 'primary', 'secondary', 'website', 'notes'],
  item: '<li><h3 class="name"></h3><p class="pi"></p><p class="department"></p><p class="goals"></p><p class="primary"></p><p class="secondary"></p><p class="website"></p><p class="notes"></p></li>'
};

var labsList;

$.getJSON( "assets/labdata/biology.json", function( data ) {
  labsList = new List('labs', options, data);
});