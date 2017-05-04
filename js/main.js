// var youtubeApp =
new Vue ({
	el: '#youtubeApp',
	data: {
		showPause: false,
		showPlay: false,
		videos:[{
			ID:'video1'
		}],
		video: null
	},
	mounted(){

		var self = this

		self.video = document.getElementById('video1')

		setInterval(function(){

			played = document.getElementById('reproduction-played')
			circle = document.getElementById('circle-indicator')

			var videoProgress = (self.video.currentTime) / (self.video.duration) //porcentaje de progreso del video
			var videoWidth = 640 // ancho en pixeles del video
			var videoCorrection = 9 // correccion a la izquierda del circulo
			var circlePos = videoProgress * videoWidth - videoCorrection // posision del circulo

			played.style.transform = "scaleX(" + videoProgress + ")";
			circle.style.transform = "translateX(" + circlePos  + "px)";

		}, 250)
	},
	methods:{
		playVid: function(video){
			//console.log("video: ", video)
			document.getElementById(video.ID).play()

			//document.getElementById('video1').play()
			this.showPlay= true
			this.showPause= true
		},
		pauseVid: function(video){
			//document.getElementById('video1').pause()
			document.getElementById(video.ID).pause()

			this.showPause= false
			this.showPlay= false
		},

		videoPosition: function (e) {
			console.log("e: ", e)
		}

	}

})
