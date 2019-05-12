
$(document).ready(function () {
  //resmin üzerine geldiğinde ve çekildiğinde resimleri değiştirerek effect verdiğim yer
  //linkedin
  $("img.linked").mouseenter(function () {
    $("img.linked").attr("src", "image/socialMedia/linkedD.png");
  });
  $("img.linked").mouseleave(function () {
    $("img.linked").attr("src", "image/socialMedia/linkedA.png");
  });
  $("img.linked").click(function () {
    $(location).attr('href', 'https://www.linkedin.com/in/okan-y-241218135/');
  });
  //twitter
  $("img.twit").mouseenter(function () {
    $("img.twit").attr("src", "image/socialMedia/twitD.png");
  });
  $("img.twit").mouseleave(function () {
    $("img.twit").attr("src", "image/socialMedia/tiwtA.png");
  });
  $("img.twit").click(function () {
    $(location).attr('href', 'https://twitter.com/okan_yesiloglu');
  });
  //github
  $("img.git").mouseenter(function () {
    $("img.git").attr("src", "image/socialMedia/icons8-github-48.png");
  });
  $("img.git").mouseleave(function () {
    $("img.git").attr("src", "image/socialMedia/icons8-github-50.png");
  });
  $("img.git").click(function () {
    $(location).attr('href', 'https://github.com/okanyesil');
  });
  //linklere tıklandığında linkin active özelliği değiştirelerek gidilecek olan
  //sayfanın linkinin arkaplanına active elemanı ekleniyor
  $("ul li.nav-item a.nav-link").click(function () {
    $("ul li.nav-item a.nav-link").removeClass("active");
    $(this).addClass("active");
  });
  $("ul li.nav-item.banner").click(function () {
    $("ul li.nav-item.banner").removeClass("active");
    $(this).addClass("active");
    $(this).attr("background", "red");
  });
  //sliderimdeki resimlere tıklandığında ilgili içeriğe yönlendirdiğim yer.
  $("img.iso").click(function () {
    window.location.href = ("hatay.html?name#issos");
  })
  $("img.titus").click(function () {
    window.location.href = ("hatay.html?name#titus");
  })
  $("img.kilise").click(function () {
    window.location.href = ("hatay.html?name#kilise");
  })
  $("img.hty").click(function () {
    window.location.href = ("hatay.html?name#hatay");
  })
});
//e mail formatı kontrol
function kontrolEt() {
  var ad = document.getElementById("ad").value;
  var soyad = document.getElementById("soyad").value;
  var mail = document.getElementById("mail").value;
  var textarea = document.getElementById("textarea").value;
  var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/;
  if (regex.test(mail) == true && ad.length>0 && soyad.length>0 && textarea.length>0) {
    //mail adresi geçerli olduğunda true değeri döndürüyor
    return 1;
  }
  else {
    //mail formatın olmayan girişler için hata mesajımı çıkarmak için false değeri döndürüyor
    return 0;
  }

}
function yonlendir() {
  // kontrolet() fonksiyonundan gelen değere göre işlemin yapılıp yapılamayacağına karar veriyorum
  //Ardından get metoduyla formdaki değerleri detay.html sayfasına yöndiriyor.
  if (kontrolEt()) {
    var value1 = document.getElementById("ad").value;
    var value2 = document.getElementById("soyad").value;
    var value3 = document.getElementById("mail").value;
    var value4 = document.getElementById("textarea").value;
    var queryString = "?name=" + value1 + "&soyad=" + value2 + "&email=" + value3 + "&textarea=" + value4;
    window.location.href = "detay.html" + queryString;
  }
  else {
    alert("Lütfen Alanları doğru doldurunuz");
  }
}
