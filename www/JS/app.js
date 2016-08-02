// This is a JavaScript file

var ncmb = new NCMB("7005ab684688e8ba22563892a5cb56979fe755c3049db11bfcfaea00398d614f","d6952e65ebcbcba5920826389915e863bfdbc5146788323891cca7601c81f3ad");    

//データをmobile backendに保存するメソッド
function saveData(){
    
var str = document.getElementById("txtb").value;
//  alert("あなたは["+str+"]と発言しました");

    //クラス名を指定して新規クラスを作成
var siritori = ncmb.DataStore("siritori");
//alert("新規クラスを作成");

    var data = new siritori();
//alert("dataクラスのインスタンスを作成");        
 
   //作成したインスタンスのvocabularyというフィールドに文字データを設定
    //Dataクラスのインスタンスを作成

//文字列が入力されていれば実行する/
if (typeof str === 'string' && str.length > 0) {
    if(str.match(/^[\u3040-\u309F]+$/)){
        if(str.slice(-1) != "ん"){
            //alert("文字入力有無if文内"); 
            siritori.equalTo("vocabulary",str)
                .count()
                .fetchAll()
                .then(function(result){
                    //alert("クラス内に"+result.count+"個保存されています");     
                    if (result.count == 0){
                        //alert("データ保存if文内"); 
                        data.set("vocabulary", str);
                        //alert("vocabularyというフィールドに入力文字を設定");
                        //設定したデータをmobile backendに保存
                        data.save()
                            .then(function(success) {
                            //成功する時の処理
                            alert("保存に成功しました");
                            })
                            .catch(function(error) {
                            //エラーが発生する時の処理
                            alert("保存に失敗しました");
                            });
                         
                    } else {
                        alert("保存済みの単語です");
                        }
                })
            
                .catch(function(error){
                    alert("データ取得に失敗しました");
                    });
            }else{
            alert("最後に【ん】がつきました");       
            }        
    }else{
    alert("ひらがな以外が入力されています");    
    }
}else {
alert("文字が入力されていません");
}
}

//686ce786bd0d837f9ff620d6fcbcfedaed1b3f1d223cc600d2c3fc853124a649