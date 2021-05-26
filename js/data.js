$(document).ready(function () {
  $.ajax({
    url: "https://spreadsheets.google.com/feeds/list/1cFTxJetCjBYhntghE0G_TGTyQtWjjYZGyVcDdwb1YTE/od6/public/values?alt=json",
    type: "GET",
    datatype: "json",
    success: function (data) {
      $("#fellowsTable").DataTable({
        data: data.feed.entry,
        pagingType: "simple_numbers",
        pageLength: 100,
        responsive: true,
        columns: [
          {
            render: function (data, type, full, meta) {
              return (
                "<p class='text-center'>" +
                full.gsx$nombre.$t +
                " " +
                full.gsx$apellido.$t +
                "</p><p class='text-center'>" +
                full.gsx$colegio.$t +
                "</p><p class='text-center'>" +
                full.gsx$carreradeinterés.$t +
                "</p><p class='text-center'>" +
                full.gsx$universidad.$t +
                "</p>"
              );
            },
          },
        ],
      });
    },
  });
});
