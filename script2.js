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
  loader.load("image/DCblmotor/DCblCoil.glb",function (DCblCoil){
    object = DCblCoil.scene;
    object.scale.set(80,80,80);
    scene.add(object);
  });
  let object14 = new THREE.Mesh;
  loader.load("image/DCblmotor/DCblCoil2.glb",function (DCblCoil2){
    object14 = DCblCoil2.scene;
    object14.scale.set(80,80,80);
    scene.add(object14);
    object14.visible = false;
  });
  let object15 = new THREE.Mesh;
  loader.load("image/DCblmotor/DCblCoil3.glb",function (DCblCoil3){
    object15 = DCblCoil3.scene;
    object15.scale.set(80,80,80);
    scene.add(object15);
    object15.visible = false;
  });
  let object16 = new THREE.Mesh;
  loader.load("image/DCblmotor/DCblCoil4.glb",function (DCblCoil4){
    object16 = DCblCoil4.scene;
    object16.scale.set(80,80,80);
    scene.add(object16);
    object16.visible = false;
  });
  let object17 = new THREE.Mesh;
  loader.load("image/DCblmotor/DCblCoil5.glb",function (DCblCoil5){
    object17 = DCblCoil5.scene;
    object17.scale.set(80,80,80);
    scene.add(object17);
    object17.visible = false;
  });
  let object18 = new THREE.Mesh;
  loader.load("image/DCblmotor/DCblCoil6.glb",function (DCblCoil6){
    object18 = DCblCoil6.scene;
    object18.scale.set(80,80,80);
    scene.add(object18);
    object18.visible = false;
  });
  let object19 = new THREE.Mesh;
  loader.load("image/DCblmotor/DCblCoil7.glb",function (DCblCoil7){
    object19 = DCblCoil7.scene;
    object19.scale.set(80,80,80);
    scene.add(object19);
    object19.visible = false;
  });
  let object20 = new THREE.Mesh;
  loader.load("image/DCblmotor/DCblCoil8.glb",function (DCblCoil8){
    object20 = DCblCoil8.scene;
    object20.scale.set(80,80,80);
    scene.add(object20);
    object20.visible = false;
  });
  let object21 = new THREE.Mesh;
  loader.load("image/DCblmotor/DCblCoil9.glb",function (DCblCoil9){
    object21 = DCblCoil9.scene;
    object21.scale.set(80,80,80);
    scene.add(object21);
    object21.visible = false;
  });
  let object22 = new THREE.Mesh;
  loader.load("image/DCblmotor/DCblCoil10.glb",function (DCblCoil10){
    object22 = DCblCoil10.scene;
    object22.scale.set(80,80,80);
    scene.add(object22);
    object22.visible = false;
  });
  let object23 = new THREE.Mesh;
  loader.load("image/DCblmotor/DCblCoil11.glb",function (DCblCoil11){
    object23 = DCblCoil11.scene;
    object23.scale.set(80,80,80);
    scene.add(object23);
    object23.visible = false;
  });
  //ステータ
  let object2 = new THREE.Mesh;
  loader.load("image/DCblmotor/DCblStator1.glb",function (DCblStator1){
    object2 = DCblStator1.scene;
    object2.scale.set(80,80,80);
    scene.add(object2);
  });
  let object3 = new THREE.Mesh;
  loader.load("image/DCblmotor/DCblStator2.glb",function (DCblStator2){
    object3 = DCblStator2.scene;
    object3.scale.set(80,80,80);
    scene.add(object3);
  });
  let object4 = new THREE.Mesh;
  loader.load("image/DCblmotor/DCblStator3.glb",function (DCblStator3){
    object4 = DCblStator3.scene;
    object4.scale.set(80,80,80);
    scene.add(object4);
  });
  
  //ロータ
  let object5 = new THREE.Mesh;
  loader.load("image/DCblmotor/DCblRotor.glb",function (DCblRotor){
    object5 = DCblRotor.scene;
    object5.scale.set(80,80,80);
    scene.add(object5);
  });
  let object8 = new THREE.Mesh;
  loader.load("image/DCblmotor/DCblRotor2.glb",function (DCblRotor2){
    object8 = DCblRotor2.scene;
    object8.scale.set(80,80,80);
    scene.add(object8);
    object8.visible = false;
  });

  //位置検出機
  let object6 = new THREE.Mesh;
  loader.load("image/DCblmotor/DCblPD.glb",function (DCblessPD){
    object6 = DCblessPD.scene;
    object6.scale.set(80,80,80);
    scene.add(object6);
  });

  //ライト作成
  const light = new THREE.AmbientLight(0xffffff);
  scene.add(light);

  //電流・磁界・力の向きの可視化表示
  //磁界
  let object7 = new THREE.Mesh;
  loader.load("image/DCblmotor/DCblmgf.glb",function (DCblmgf){
    object7 = DCblmgf.scene;
    object7.scale.set(80,80,80);
    scene.add(object7);
    object7.visible = false;
  });
  let object13 = new THREE.Mesh;
  loader.load("image/DCblmotor/DCblmgf2.glb",function (DCblmgf2){
    object13 = DCblmgf2.scene;
    object13.scale.set(80,80,80);
    scene.add(object13);
    object13.visible = false;
  });
  check2.addEventListener('change', valueChange);
  function valueChange(){
    if(check2.checked){
      object7.visible = true;
      object13.visible = true;
    }else {
      object7.visible = false;
      object13.visible = false;
    };
  };
  //電流
  let object9 = new THREE.Mesh;
  loader.load("image/DCblmotor/DCblcurrent.glb",function (DCblcurrent){
    object9 = DCblcurrent.scene;
    object9.scale.set(80,80,80);
    scene.add(object9);
    object9.visible = false;
  });
  let object10 = new THREE.Mesh;
  loader.load("image/DCblmotor/DCblcurrent2.glb",function (DCblcurrent2){
    object10 = DCblcurrent2.scene;
    object10.scale.set(80,80,80);
    scene.add(object10);
    object10.visible = false;
  });
  check1.addEventListener('change', valueChange1);
  function valueChange1(){
    if(check1.checked){
      object9.visible = true;
      object10.visible = true;
    }else {
      object9.visible = false;
      object10.visible = false;
    };
  };  

  //力
  let object11 = new THREE.Mesh;
  loader.load("image/DCblmotor/DCblforce.glb",function (DCblforce){
    object11 = DCblforce.scene;
    object11.scale.set(80,80,80);
    scene.add(object11);
    object11.visible = false;
  });
  let object12 = new THREE.Mesh;
  loader.load("image/DCblmotor/DCblforce2.glb",function (DCblforce2){
    object12 = DCblforce2.scene;
    object12.scale.set(80,80,80);
    scene.add(object12);
    object12.visible = false;
  });
  check3.addEventListener('change', valueChange2);
  function valueChange2(){
    if(check3.checked){
      object11.visible = true;
      object12.visible = true;
    }else {
      object11.visible = false;
      object12.visible = false;
    };
  };
  
  //パラメータ操作の値取得
  const voltage = document.getElementById("vol");
  const coil = document.getElementById("coil");
  const pole = document.getElementById("pole");

  //コイルの巻き数変更
  coil.addEventListener("input", rangeChange1);
  function rangeChange1(){
    if(coil.value == 0){
      object.visible = true;
      object14.visible = false;
      object15.visible = false;
      object16.visible = false;
      object17.visible = false;
      object18.visible = false;
      object19.visible = false;
      object20.visible = false;
      object21.visible = false;
      object22.visible = false;
      object23.visible = false;
    }else if(coil.value == 1){
      object.visible = false;
      object14.visible = true;
      object15.visible = false;
      object16.visible = false;
      object17.visible = false;
      object18.visible = false;
      object19.visible = false;
      object20.visible = false;
      object21.visible = false;
      object22.visible = false;
      object23.visible = false;

    }else if(coil.value == 2){
      object.visible = false;
      object14.visible = false;
      object15.visible = true;
      object16.visible = false;
      object17.visible = false;
      object18.visible = false;
      object19.visible = false;
      object20.visible = false;
      object21.visible = false;
      object22.visible = false;
      object23.visible = false;
    }else if(coil.value == 3){
      object.visible = false;
      object14.visible = false;
      object15.visible = false;
      object16.visible = true;
      object17.visible = false;
      object18.visible = false;
      object19.visible = false;
      object20.visible = false;
      object21.visible = false;
      object22.visible = false;
      object23.visible = false;
    }else if(coil.value == 4){
      object.visible = false;
      object14.visible = false;
      object15.visible = false;
      object16.visible = false;
      object17.visible = true;
      object18.visible = false;
      object19.visible = false;
      object20.visible = false;
      object21.visible = false;
      object22.visible = false;
      object23.visible = false;
    }else if(coil.value == 5){
      object.visible = false;
      object14.visible = false;
      object15.visible = false;
      object16.visible = false;
      object17.visible = false;
      object18.visible = true;
      object19.visible = false;
      object20.visible = false;
      object21.visible = false;
      object22.visible = false;
      object23.visible = false;
    }else if(coil.value == 6){
      object.visible = false;
      object14.visible = false;
      object15.visible = false;
      object16.visible = false;
      object17.visible = false;
      object18.visible = false;
      object19.visible = true;
      object20.visible = false;
      object21.visible = false;
      object22.visible = false;
      object23.visible = false;
    }else if(coil.value == 7){
      object.visible = false;
      object14.visible = false;
      object15.visible = false;
      object16.visible = false;
      object17.visible = false;
      object18.visible = false;
      object19.visible = false;
      object20.visible = true;
      object21.visible = false;
      object22.visible = false;
      object23.visible = false;
    }else if(coil.value == 8){
      object.visible = false;
      object14.visible = false;
      object15.visible = false;
      object16.visible = false;
      object17.visible = false;
      object18.visible = false;
      object19.visible = false;
      object20.visible = false;
      object21.visible = true;
      object22.visible = false;
      object23.visible = false;
    }else if(coil.value == 9){
      object.visible = false;
      object14.visible = false;
      object15.visible = false;
      object16.visible = false;
      object17.visible = false;
      object18.visible = false;
      object19.visible = false;
      object20.visible = false;
      object21.visible = false;
      object22.visible = true;
      object23.visible = false;
    }else{
      object.visible = false;
      object14.visible = false;
      object15.visible = false;
      object16.visible = false;
      object17.visible = false;
      object18.visible = false;
      object19.visible = false;
      object20.visible = false;
      object21.visible = false;
      object22.visible = false;
      object23.visible = true;
    };
  };
  animate();
  function animate(){
    requestAnimationFrame(animate);
    controls.update();
    let value = voltage.value - coil.value;
    if(value < 0){
      value = 0;
    };
    object5.rotation.z += -value * 0.01;
    object8.rotation.z += (-value * 0.01) / 2;
    if(pole.value == 0){
      object5.visible = true;
      object8.visible = false;
    }else{
      object5.visible = false;
      object8.visible = true;
    };


    //磁界回転・磁界の向き・電流の向き・力の向き変更
    if(object5.rotation.z % (Math.PI * 2) < (-45 * Math.PI) / 180){
      object3.rotation.z =(-120 * Math.PI) / 180;
      object4.rotation.z =(120 * Math.PI) / 180;
      object13.rotation.z =(-120 * Math.PI) / 180;
      object10.rotation.z =(-120 * Math.PI) / 180;
      object12.rotation.z =(-120 * Math.PI) / 180;
    };
    if(object5.rotation.z % (Math.PI * 2) < (-100 * Math.PI) / 180){
      object2.rotation.z =(-120 * Math.PI) / 180;
      object4.rotation.z =(240 * Math.PI) / 180;
      object7.rotation.z =(-120 * Math.PI) / 180;
      object9.rotation.z =(-120 * Math.PI) / 180;
      object11.rotation.z =(-120 * Math.PI) / 180;
    };
    if(object5.rotation.z % (Math.PI * 2) < (-160 * Math.PI) / 180){
      object3.rotation.z =(120 * Math.PI) / 180;
      object4.rotation.z =(360 * Math.PI) / 180;
      object13.rotation.z =(120 * Math.PI) / 180;
      object10.rotation.z =(120 * Math.PI) / 180;
      object12.rotation.z =(120 * Math.PI) / 180;
    };
    if(object5.rotation.z % (Math.PI * 2) < (-225 * Math.PI) / 180){
      object2.rotation.z =(120 * Math.PI) / 180;
      object4.rotation.z =(120 * Math.PI) / 180;
      object7.rotation.z =(120 * Math.PI) / 180;
      object9.rotation.z =(120 * Math.PI) / 180;
      object11.rotation.z =(120 * Math.PI) / 180;
    };
    if(object5.rotation.z % (Math.PI * 2) < (-290 * Math.PI) / 180){
      object3.rotation.z =(360 * Math.PI) / 180;
      object4.rotation.z =(-120 * Math.PI) / 180;
      object13.rotation.z =(360 * Math.PI) / 180;
      object10.rotation.z =(360 * Math.PI) / 180;
      object12.rotation.z =(360 * Math.PI) / 180;
    };
    if(object5.rotation.z % (Math.PI * 2) < (-355 * Math.PI) / 180){
      object2.rotation.z =(360 * Math.PI) / 180;
      object4.rotation.z =(360 * Math.PI) / 180;
      object7.rotation.z =(360 * Math.PI) / 180;
      object9.rotation.z =(360 * Math.PI) / 180;
      object11.rotation.z =(360 * Math.PI) / 180;
    };
    renderer.render(scene, camera);
  };
};