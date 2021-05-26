$(document).ready(function () {
  $.ajax({
    url: "https://spreadsheets.google.com/feeds/list/11q0VAoWR9revxwRLLT1fkww9doXJIc4kjuVIQBgmluY/1/public/values?alt=json",
    type: "GET",
    datatype: "json",
    success: function (data) {
      $("#fellowsTable").DataTable({
        data: data.feed.entry,
        pagingType: "simple_numbers",
        pageLength: 100,
        lengthChange: false,
        responsive: true,
        language: {
          search: "Buscar:",
        },
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
