$(document).ready(function () {
  $.ajax({
    url: "https://spreadsheets.google.com/feeds/list/1cFTxJetCjBYhntghE0G_TGTyQtWjjYZGyVcDdwb1YTE/od6/public/values?alt=json",
    type: "GET",
    datatype: "json",
    success: function (data) {
      $("#fellowsTable").DataTable({
        data: data.feed.entry,
        pagingType: "simple_numbers",
        pageLength: 5,
        responsive: true,
        columns: [
          { data: "gsx$nombre.$t" },
          { data: "gsx$apellido.$t" },
          { data: "gsx$colegio.$t" },
          { data: "gsx$universidad.$t" },
          { data: "gsx$carreradeinterés.$t" },
        ],
      });
    },
  });
});
