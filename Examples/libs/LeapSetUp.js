/**
 * 
 */

LeapSetUp = function () {

	this.getCameraControls  = function (camera){
		
		var cameraControls = new THREE.LeapCameraControls(camera);
		  
		cameraControls.rotateEnabled  = true;
	    cameraControls.rotateSpeed    = 3;
	    cameraControls.rotateHands    = 1;
	    cameraControls.rotateFingers  = [2, 3];
	    
	    cameraControls.zoomEnabled    = true;
	    cameraControls.zoomSpeed      = 6;
	    cameraControls.zoomHands      = 1;
	    cameraControls.zoomFingers    = [4, 5];
	    cameraControls.zoomMin        = 50;
	    cameraControls.zoomMax        = 2000;
	    
	    cameraControls.panEnabled     = true;
	    cameraControls.panSpeed       = 2;
	    cameraControls.panHands       = 2;
	    cameraControls.panFingers     = [6, 12];
	    cameraControls.panRightHanded = false; //use right hand
	    
	    return cameraControls;
		
	}
	
	this.getObjectControls = function (camera, object){
		
 	 	var objectControls = new THREE.LeapObjectControls(camera, object);
 	 	 objectControls.rotateEnabled  = true;
         objectControls.rotateSpeed    = 3;
         objectControls.rotateHands    = 1;
         objectControls.rotateFingers  = [2, 3];
         
         objectControls.scaleEnabled   = true;
         objectControls.scaleSpeed     = 3;
         objectControls.scaleHands     = 1;
         objectControls.scaleFingers   = [4, 5];
         
         objectControls.panEnabled     = true;
         objectControls.panSpeed       = 3;
         objectControls.panHands       = 2;
         objectControls.panFingers     = [6, 12];
         objectControls.panRightHanded = false; // for left-handed person
 	 
         return objectControls;

	}

}