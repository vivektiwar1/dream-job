$(document).ready(function(){
    $("#btn_all_category").click(function(){
        $("#more-category").show("slow", "linear");
        $("#btn_all_category").addClass("d-none");
        $("#btn_hide_category").removeClass("d-none");
    });
    $("#btn_hide_category").click(function(){
        $("#more-category").hide("slow", "linear");
        $("#btn_all_category").removeClass("d-none");
        $("#btn_hide_category").addClass("d-none");
    });
  
  });