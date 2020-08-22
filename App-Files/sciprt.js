
console.log("ready!");
setInterval(ChangeBackground, 3000)

let count = 0;
function ChangeBackground() {

    if (count === 0) {

        $('.img-0').show();
        $('.img-1').hide();
        $('.img-2').hide();
        $('.img-3').hide();

    }

    if (count === 1) {
        $('.img-0').hide();
        $('.img-1').show();
        $('.img-2').hide();
        $('.img-3').hide();



    }
    if (count === 2) {

        $('.img-0').hide();
        $('.img-1').hide();
        $('.img-2').show();
        $('.img-3').hide();


    }
    if (count === 3) {

        $('.img-0').hide();
        $('.img-1').hide();
        $('.img-2').hide();
        $('.img-3').show();


    }
    console.log('iam here', count)
    count += 1
    if (count === 4) count = 0;
}

ChangeBackground();

$('.img-0').click(function () {

});