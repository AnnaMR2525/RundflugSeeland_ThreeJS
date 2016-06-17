KinectHelpers = function () {
	
	function setKinectSensor () {
		Kinect.connect("http://localhost", 8181);

		var sensor = Kinect.sensor();
		return sensor;

	}

	function configureKinect(sensor) {
		var configuration = {
		 
			"interaction" : {
				"enabled": true,
			},
		 
			"userviewer" : {
				"enabled": true,
				"resolution": "640x480", //320x240, 160x120, 128x96, 80x60
				"userColors": { "engaged": 0xffffffff, "tracked": 0xffffffff },
				"defaultUserColor": 0xffffffff, //RGBA
			},
		 
			"backgroundRemoval" : {
				"enabled": true,
				"resolution": "640x480", //1280x960
			},
		 
			"skeleton" : {
				"enabled": true,
			},
		 
			"sensorStatus" : {
				"enabled": true,
			}
		 
		};
		Kinect.sensor.setconfiguration 
		return configuration;
		
	}

	function addSensorHandler (sensor) {
		sensor.addStreamFrameHandler( function(frame) {
	                
	    switch (frame.stream) {
	        case Kinect.SKELETON_STREAM_NAME:
	            for (var iSkeleton = 0; iSkeleton < frame.skeletons.length; ++iSkeleton) {
	                var skeleton = frame.skeletons[iSkeleton];
	                            
	                skeleton.trackingId;
	                skeleton.trackingState;
	                skeleton.position;
	                            
	                for (var iJoint = 0; iJoint < skeleton.joints.length; ++iJoint) {
	                    var joint = skeleton.joints[iJoint];
	                    joint.jointType;
	                    joint.trackingState;
	                    joint.position; 
	                }
	            }
	            
				break;
			}
		});
		return sensor;
		
	}
	
}

