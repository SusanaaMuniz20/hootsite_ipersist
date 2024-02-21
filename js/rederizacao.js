
  $(document).ready(function() {
    // Aplica a funcionalidade de redimensionamento à tabela com o ID 'tabela-redimensionavel'
    $('#tabela-redimensionavel').colResizable({
      liveDrag: true,
      gripInnerHtml: "<div class='grip'></div>",
      draggingClass: "dragging",
      resizeMode: 'fit'
    });
  });