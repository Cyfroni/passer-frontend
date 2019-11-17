<template>
  <div class="upload-form">
    <div class="input-group mb-4">
      <div class="custom-file">
        <input
          @change="onFileChange"
          type="file"
          class="custom-file-input"
          id="inputGroupFile01"
          aria-describedby="inputGroupFileAddon01"
        />
        <label class="custom-file-label" for="inputGroupFile01">{{
          text
        }}</label>
      </div>
    </div>
    <button type="button" class="btn btn-primary" @click="storeFile">
      Upload
    </button>
  </div>
</template>

<script>
export default {
  name: 'UploadForm',
  data() {
    return { file: '', data: '' }
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.createImage(files[0])
    },
    createImage(file) {
      var reader = new FileReader()
      var vm = this

      reader.onload = e => {
        vm.data = e.target.result
      }
      reader.onloadend = () => {
        vm.file = file
      }

      reader.readAsDataURL(file)
    },
    storeFile() {
      console.log(this.data)
    }
  },
  computed: {
    text() {
      return this.file ? this.file.name : 'Select file to upload'
    }
  }
}
</script>

<style scoped>
.upload-form {
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
