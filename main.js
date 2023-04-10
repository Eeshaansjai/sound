function staetClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundclassifier('')}

function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 225) + 1;
        random_number_g = Math.floor(Math.random() * 225) + 1;
        random_number_b = Math.floor(Math.random() * 225) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rbg("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rbg("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        
        img = document.getElementById('cat-toes-paw-number-paws-tiger-tabby.webp');
        img1 = document.getElementById('aslan-roar.gif');
        img2 = document.getElementById('puppy-1903313__340.jpg');
        img3 = document.getElementById('360_F_135978399_qplk3WPu7JOA63JPCYVy1fb7MI4nefAL.jpg');

        if (results[0].label == "roar") {
            img.src = 'cat-toes-paw-number-paws-tiger-tabby.webp';
            img.src = 'aslan-roar.gif-02.';
            img.src = 'puppy-1903313__340.jpg';
            img.src = '360_F_135978399_qplk3WPu7JOA63JPCYVy1fb7MI4nefAL.jpg';
        } else if (results[0].label == "meow") {
            img.src = 'KindheartedSoggyCoyote-max-1mb.gif';
            img.src = 'aslan-roar.gif';
            img.src = 'puppy-1903313__340.jpg';
            img.src = '360_F_135978399_qplk3WPu7JOA63JPCYVy1fb7MI4nefAL.jpg';
        } else if (results[0].label == "barking") {
            img.src = 'cat-toes-paw-number-paws-tiger-tabby.webp';
            img.src = 'aslan-roar.gif';
            img.src = 'dog.gif';
            img.src = '360_F_135978399_qplk3WPu7JOA63JPCYVy1fb7MI4nefAL.jpg';
        } else {
            img.src = 'cat-toes-paw-number-paws-tiger-tabby.webp';
            img.src = 'aslan-roar.gif';
            img.src = 'puppy-1903313__340.jpg';
            img.src = 'aliens-04.gif';
        }
    }
}