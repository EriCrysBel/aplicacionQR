const tabLinks= document.querySelectorAll('.tab-link');
const tabPanes= document.querySelectorAll('.tab-pane');
// console.log(tabLinks);
// console.log(tabPanes);
// Agrega un manejador de eventos a cada pestaña
tabLinks.forEach(
  function(link,index){
    // console.log(link);
    // console.log(indice);
    // link.addEventListener('click',function(e){
    //   document.write ('Jose te pasas');
    //   document.write (e);
    // })
    link.addEventListener('click',function(){
      tabPanes.forEach(function(pane,indice){
        pane.style.display='none';
      });
      tabPanes[index].style.display='block';
    })
  }
);

$('.message a').click(function(){
  $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});