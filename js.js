function social() {
  $("#btn").addClass('isActive');
  $("#social").css('display', 'block')

  $(document).mouseup(function (e) {
    var container = $("#social");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.hide();
      $('#btn').removeClass('isActive');
    }
  });
};

function socialmobile() {
  $("#btnmobile").addClass('isActive')
  $("#csmobile").addClass('csActive');
  $("#creator").hide();
  $("#socialmobile").show();

  $(document).mouseup(function (e) {
    var container = $("#csmobile");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $("#creator").show();
      $("#socialmobile").hide();
      $('#btnmobile').removeClass('isActive');
      $("#csmobile").removeClass('csActive');
    }
  });
}