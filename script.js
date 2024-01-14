window.addEventListener('DOMContentLoaded', init);
function init() {

  //レンダラーのサイズ設定
  const width = 960;
  const height = 540;
  
  //レンダラー作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#myCanvas")
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.outputEncoding = THREE.sRGBEncoding;
  
  //シーン作成　オブジェクトや光源の置き場
  const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xf5f5f5 );

  //カメラ(画角，アスペクト比，描画開始距離，描画終了距離)
  const camera = new THREE.PerspectiveCamera(
    45, width / height, 1,10000);

  //カメラの初期座標(X,Y,Z)
  camera.position.set(200,400,1000);

  const controls = new THREE.OrbitControls(camera,renderer.domElement);

  //モーター読み込み
   //コイル
  const loader = new THREE.GLTFLoader();
  let object = new THREE.Mesh;
  loader.load("image/DCmotor/DCcoil.glb",function (DCcoil){
    object = DCcoil.scene;
    object.scale.set(70,70,70);
    scene.add(object);
    object.visible = true;
  });

  let object8 = new THREE.Mesh;
  loader.load("image/DCmotor/DCcoil2.glb",function (DCcoil){
    object8 = DCcoil.scene;
    object8.scale.set(70,70,70);
    scene.add(object8);
    object8.visible = false;
  });

  let object9 = new THREE.Mesh;
  loader.load("image/DCmotor/DCcoil3.glb",function (DCcoil){
    object9 = DCcoil.scene;
    object9.scale.set(70,70,70);
    scene.add(object9);
    object9.visible = false;
  });

  let object10 = new THREE.Mesh;
  loader.load("image/DCmotor/DCcoil4.glb",function (DCcoil){
    object10 = DCcoil.scene;
    object10.scale.set(70,70,70);
    scene.add(object10);
    object10.visible = false;
  });

  let object11 = new THREE.Mesh;
  loader.load("image/DCmotor/DCcoil5.glb",function (DCcoil){
    object11 = DCcoil.scene;
    object11.scale.set(70,70,70);
    scene.add(object11);
    object11.visible = false;
  });

  let object12 = new THREE.Mesh;
  loader.load("image/DCmotor/DCcoil6.glb",function (DCcoil){
    object12 = DCcoil.scene;
    object12.scale.set(70,70,70);
    scene.add(object12);
    object12.visible = false;
  });

  let object13 = new THREE.Mesh;
  loader.load("image/DCmotor/DCcoil7.glb",function (DCcoil){
    object13 = DCcoil.scene;
    object13.scale.set(70,70,70);
    scene.add(object13);
    object13.visible = false;
  });

  let object14 = new THREE.Mesh;
  loader.load("image/DCmotor/DCcoil8.glb",function (DCcoil){
    object14 = DCcoil.scene;
    object14.scale.set(70,70,70);
    scene.add(object14);
    object14.visible = false;
  });

  let object15 = new THREE.Mesh;
  loader.load("image/DCmotor/DCcoil9.glb",function (DCcoil){
    object15 = DCcoil.scene;
    object15.scale.set(70,70,70);
    scene.add(object15);
    object15.visible = false;
  });

  let object16 = new THREE.Mesh;
  loader.load("image/DCmotor/DCcoil10.glb",function (DCcoil){
    object16 = DCcoil.scene;
    object16.scale.set(70,70,70);
    scene.add(object16);
    object16.visible = false;
  });

  let object17 = new THREE.Mesh;
  loader.load("image/DCmotor/DCcoil11.glb",function (DCcoil){
    object17 = DCcoil.scene;
    object17.scale.set(70,70,70);
    scene.add(object17);
    object17.visible = false;
  });

  
  let object2;
  loader.load("image/DCmotor/DCmotormagnet.glb",function (DCmagnet){
    object2 = DCmagnet.scene;
    object2.scale.set(70,70,70);
    scene.add(object2);
  });

  //ライト作成
  const light = new THREE.AmbientLight(0xffffff);
  scene.add(light);

  //電流・磁界・力の向きの可視化表示
  　//電流
  let object6 = new THREE.Mesh;
  let object7 = new THREE.Mesh;
  loader.load("image/DCmotor/DCcurrent.glb",function(DCcurrent){
    object6 = DCcurrent.scene;
    object6.scale.set(70,70,70);
    scene.add(object6);
    object6.visible = false;

    object7 = object6.clone();
    object7.scale.set(70,70,70);
    object7.position.set(196,0,0);
    object7.rotation.x = Math.PI;
    scene.add(object7);
    object7.visible = false;
  });
  check1.addEventListener('change', valueChange1);
  function valueChange1(){
    if(check1.checked){
      object6.visible = true;
      object7.visible = true;
    }else {
      object6.visible = false;
      object7.visible = false;
    };
  };  
  

  　//磁界
  let object3;
  loader.load("image/DCmotor/DCmgf.glb" ,function(DCmgf){
    object3 = DCmgf.scene;
    object3.scale.set(70,70,70);
    scene.add(object3);
    object3.visible = false;
   });
  check2.addEventListener('change', valueChange);
  function valueChange(){
    if(check2.checked){
      object3.visible = true;
    }else {
      object3.visible = false;
    };
  };

  　//力
  let object4 = new THREE.Mesh;
  let object5 = new THREE.Mesh;
  loader.load("image/DCmotor/DCforce.glb",function(DCforce){
    object4 = DCforce.scene;
    object4.scale.set(70,70,70);
    scene.add(object4);
    object4.visible = false;

    object5 = object4.clone();
    object5.scale.set(70,70,70);
    object5.position.set(238,0,0);
    object5.rotation.x = Math.PI;
    scene.add(object5);
    object5.visible = false;
  });
  check3.addEventListener('change', valueChange2);
  function valueChange2(){
    if(check3.checked){
      object4.visible = true;
      object5.visible = true;
    }else {
      object4.visible = false;
      object5.visible = false;
    };
  };
  //パラメータ操作の値取得
  const voltage = document.getElementById("vol");
  const coil = document.getElementById("coil");
  
  //コイルの巻き数変更
  coil.addEventListener("input", rangeChange1);
  function rangeChange1(){
    if(coil.value == 0){
      object.visible = true;
      object8.visible = false;
      object9.visible = false;
      object10.visible = false;
      object11.visible = false;
      object12.visible = false;
      object13.visible = false;
      object14.visible = false;
      object15.visible = false;
      object16.visible = false;
      object17.visible = false;
    }else if(coil.value == 1){
      object.visible = false;
      object8.visible = true;
      object9.visible = false;
      object10.visible = false;
      object11.visible = false;
      object12.visible = false;
      object13.visible = false;
      object14.visible = false;
      object15.visible = false;
      object16.visible = false;
      object17.visible = false;
      
    }else if(coil.value == 2){
      object.visible = false;
      object8.visible = false;
      object9.visible = true;
      object10.visible = false;
      object11.visible = false;
      object12.visible = false;
      object13.visible = false;
      object14.visible = false;
      object15.visible = false;
      object16.visible = false;
      object17.visible = false;
    }else if(coil.value == 3){
      object.visible = false;
      object8.visible = false;
      object9.visible = false;
      object10.visible = true;
      object11.visible = false;
      object12.visible = false;
      object13.visible = false;
      object14.visible = false;
      object15.visible = false;
      object16.visible = false;
      object17.visible = false;
    }else if(coil.value == 4){
      object.visible = false;
      object8.visible = false;
      object9.visible = false;
      object10.visible = false;
      object11.visible = true;
      object12.visible = false;
      object13.visible = false;
      object14.visible = false;
      object15.visible = false;
      object16.visible = false;
      object17.visible = false;
    }else if(coil.value == 5){
      object.visible = false;
      object8.visible = false;
      object9.visible = false;
      object10.visible = false;
      object11.visible = false;
      object12.visible = true;
      object13.visible = false;
      object14.visible = false;
      object15.visible = false;
      object16.visible = false;
      object17.visible = false;
    }else if(coil.value == 6){
      object.visible = false;
      object8.visible = false;
      object9.visible = false;
      object10.visible = false;
      object11.visible = false;
      object12.visible = false;
      object13.visible = true;
      object14.visible = false;
      object15.visible = false;
      object16.visible = false;
      object17.visible = false;
    }else if(coil.value == 7){
      object.visible = false;
      object8.visible = false;
      object9.visible = false;
      object10.visible = false;
      object11.visible = false;
      object12.visible = false;
      object13.visible = false;
      object14.visible = true;
      object15.visible = false;
      object16.visible = false;
      object17.visible = false;
    }else if(coil.value == 8){
      object.visible = false;
      object8.visible = false;
      object9.visible = false;
      object10.visible = false;
      object11.visible = false;
      object12.visible = false;
      object13.visible = false;
      object14.visible = false;
      object15.visible = true;
      object16.visible = false;
      object17.visible = false;
    }else if(coil.value == 9){
      object.visible = false;
      object8.visible = false;
      object9.visible = false;
      object10.visible = false;
      object11.visible = false;
      object12.visible = false;
      object13.visible = false;
      object14.visible = false;
      object15.visible = false;
      object16.visible = true;
      object17.visible = false;
    }else{
      object.visible = false;
      object8.visible = false;
      object9.visible = false;
      object10.visible = false;
      object11.visible = false;
      object12.visible = false;
      object13.visible = false;
      object14.visible = false;
      object15.visible = false;
      object16.visible = false;
      object17.visible = true;
    };
  };
  let rot = 0;
  animate();
  function animate(){
    requestAnimationFrame(animate);
    controls.update();
    
    //コイルの回転
    let value = voltage.value - coil.value;
    if(value < 0){
      value = 0;
    };


    object.rotation.z += value * 0.01;
    object8.rotation.z += value * 0.01;
    object9.rotation.z += value * 0.01;
    object10.rotation.z += value * 0.01;
    object11.rotation.z += value * 0.01;
    object12.rotation.z += value * 0.01;
    object13.rotation.z += value * 0.01;
    object14.rotation.z += value * 0.01;
    object15.rotation.z += value * 0.01;
    object16.rotation.z += value * 0.01;
    object17.rotation.z += value * 0.01;
    
    //力の向きの回転
    rot += value * 0.01
    object4.position.x = -119 * Math.cos(rot) + 119;
    object4.position.y = -119 * Math.sin(rot);
    object5.position.x = 119 * Math.cos(rot) + 119;
    object5.position.y = 119 * Math.sin(rot);
    if(object4.position.x > 119 && object4.position.y < 0){
       object4.rotation.x = Math.PI;
    }else if(object4.position.x < 119 && object4.position.y > 0){
       object4.rotation.x = Math.PI * 2;
    };
    if(object5.position.x > 119 && object5.position.y < 0){
       object5.rotation.x = Math.PI;
    }else if(object5.position.x < 119 && object5.position.y > 0){
       object5.rotation.x = Math.PI * 2;
    };

    //電流の向きの回転
    object6.position.x = -98 * Math.cos(rot) + 98;
    object6.position.y = -98 * Math.sin(rot);
    object7.position.x = 98 * Math.cos(rot) + 98;
    object7.position.y = 98 * Math.sin(rot) ;
    if(object6.position.x > 98 && object6.position.y < 0){
       object6.rotation.x = Math.PI;
    }else if(object6.position.x < 98 && object6.position.y > 0){
       object6.rotation.x = Math.PI * 2;
    };
    if(object7.position.x > 98 && object7.position.y < 0){
       object7.rotation.x = Math.PI;
    }else if(object7.position.x < 98 && object7.position.y > 0){
       object7.rotation.x = Math.PI * 2;
    };
    
    renderer.render(scene, camera);
  };
};