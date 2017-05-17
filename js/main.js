var youtubeApp = new Vue ({
	el: '#youtubeApp',
	data: {
		video: null,
		played: null,
		circle: null,

		paused: false,
		duration: "",
		currentTime: "",
		progress: null,

		progressBarWidth: 616,
		circleCorrection: 9
	},
  computed: {
    position: function () {
      return this.progress * this.progressBarWidth - this.circleCorrection
    }
  },
	mounted() {

		var self = this

		self.video = document.getElementById('video')
		self.played = document.getElementById('reproduction-played')
		self.circle = document.getElementById('circle-indicator')

		// self.currentTime = parseTime(self.video.currentTime)
		self.currentTime = self.video.currentTime

		self.video.addEventListener('loadedmetadata', function() {
			// self.duration = parseTime(self.video.duration)
			self.duration = self.video.duration
		})

		self.video.addEventListener('timeupdate', function() {
			// self.currentTime = parseTime(self.video.currentTime)
			self.currentTime = self.video.currentTime
			self.progress = self.video.currentTime / self.video.duration
			self.updateVideProgress()
		})

	},
	methods:{

		play: function() {
			this.video.play()
			this.paused = true
		},
		pause: function() {
			this.video.pause()
			this.paused = false
		},

		updateVideProgress: function () {
			this.played.style.transform = "scaleX(" + this.progress + ")";
			this.circle.style.transform = "translateX(" + this.position  + "px)";
		}
	},
	filters: {
    parseTime: function (seconds) {
			var h = Math.trunc(seconds / 3600)
			var m = Math.trunc((seconds - h*3600) / 60)
			var s = Math.trunc((seconds - h*3600 - m*60))

			h = h.toString()
			m = m.toString()
			s = s.toString()

			if (s.length == 1) {
				s = "0" + s
			}

			return m + ":" + s
    }
  }

})

// Crear directiva custom
// function parseTime(seconds) {
// 	var h = Math.trunc(seconds / 3600)
// 	var m = Math.trunc((seconds - h*3600) / 60)
// 	var s = Math.trunc((seconds - h*3600 - m*60))

// 	h = h.toString()
// 	m = m.toString()
// 	s = s.toString()

// 	if (s.length == 1) {
// 		s = "0" + s
// 	}

// 	return m + ":" + s
// }
