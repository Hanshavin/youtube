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




	},
	mounted(){


		var self = this

		self.video = document.getElementById('video1')

		setInterval(function(){
			var progress = (self.video.currentTime) / (self.video.duration)
			console.log("progress: ", progress)

			played = document.getElementById('reproduction-played')
			// circle = document.getElementById('circle-indicator')

			//played.style.width = progress + "%"

			played.style.transform = "scaleX(" + progress + ")";
			// circle.style.transform = "translateX(" + progress + "px)";

			
			
		}, 1000)
	}
})