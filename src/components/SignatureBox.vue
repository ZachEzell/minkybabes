<template>
    <div id="signature-box">
        <VueSignaturePad
            id="signature"
            width="500px"
            height="250px"
            ref="signaturePad"
            
        ></VueSignaturePad>
       <div>x________________________________________________________</div>
        <div>
            <button @click="undo">undo</button>
            <button>save</button>
        </div>
        
       
    </div>
    
</template>


<script>
export default {
  methods: {
    undo() {
      this.$refs.signaturePad.undoSignature();
    }
  }
};
</script>


<style>
#signature-box {
  display: flex;
  flex-direction: column;
}
</style>