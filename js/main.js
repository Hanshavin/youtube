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

			// console.log("self.video.playing: ", self.video.playing)

			if (self.video.currentTime > 0 && !self.video.paused && !self.video.ended && self.video.readyState > 2) {

				var played = document.getElementById('reproduction-played')
				var circle = document.getElementById('circle-indicator')

				var videoProgress = (self.video.currentTime) / (self.video.duration) //porcentaje de progreso del video
				var progressBarWidth = 616 // ancho en pixeles de la progressBar
				var circleCorrection = 9 // correccion a la izquierda del circulo
				var circlePos = videoProgress * progressBarWidth - circleCorrection // posision del circulo

				played.style.transform = "scaleX(" + videoProgress + ")";
				circle.style.transform = "translateX(" + circlePos  + "px)";
			}


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
			// console.log("e: ", e)

			var played = document.getElementById('reproduction-played')
			var circle = document.getElementById('circle-indicator')

			var progressBar = document.getElementById('progreso')
			var progressBarX = progressBar.getBoundingClientRect().left

			var clickX = e.clientX

			var progressBarWidth = 616
			var videoProgress = (clickX - progressBarX) / progressBarWidth

			var videoTime = videoProgress * this.video.duration
			// console.log("videoTime: ", videoTime)

			var circleCorrection = 9

			var circlePos = clickX - progressBarX - circleCorrection
			// console.log('circlePos: ', circlePos)

			played.style.transform = "scaleX(" + videoProgress + ")";
			circle.style.transform = "translateX(" + circlePos  + "px)";
			this.video.currentTime = videoTime

		}

	}

})











