$(document).ready(function () {
  $.ajax({
    url: "https://spreadsheets.google.com/feeds/list/1cFTxJetCjBYhntghE0G_TGTyQtWjjYZGyVcDdwb1YTE/od6/public/values?alt=json",
    type: "GET",
    datatype: "json",
    success: function (data) {
      $("#fellowsTable").DataTable({
        data: data.feed.entry,
        pagingType: "simple_numbers",
        pageLength: 10,
        responsive: true,
        columns: [
          {
            render: function (data, type, full, meta) {
              return (
                "<strong class='text-blue-tci'>Full name:</strong> " +
                full.gsx$nombre.$t +
                " " +
                full.gsx$apellido.$t +
                "<br><strong class='text-blue-tci'>School:</strong> " +
                full.gsx$colegio.$t +
                "<br><strong class='text-blue-tci'>University:</strong> " +
                full.gsx$universidad.$t +
                "<br><strong class='text-blue-tci'>Career of interest:</strong> " +
                full.gsx$carreradeinterés.$t
              );
            },
          },
        ],
      });
    },
  });
});
