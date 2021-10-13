<template>
  <header
    id="navbar-spy"
    class="header header-1 header-transparent header-fixed"
  >
    <nav id="primary-menu" class="navbar navbar-fixed-top">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar-collapse-1"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="logo" to="/">
            <img
              class="logo-light"
              src="/assets/images/logo/logo-light.png"
              alt="Land Logo"
            />
            <img
              class="logo-dark"
              src="/assets/images/logo/logo-dark.png"
              alt="Land Logo"
            />
          </router-link>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse pull-right" id="navbar-collapse-1">
          <ul class="nav navbar-nav nav-pos-center navbar-left">
            <!-- Home Menu -->
            <li class=" active">
              <router-link
                to="/"
                data-toggle="dropdown"
                class="dropdown-toggle menu-item"
                >home</router-link
              >
              
            </li>
            <li class=" active">
              <router-link
                to="/property"
                data-toggle="dropdown"
                class="dropdown-toggle menu-item"
                >property</router-link
              >
              
            </li>
            <li class=" active">
              <router-link
                to="/agency"
                data-toggle="dropdown"
                class="dropdown-toggle menu-item"
                >agency</router-link
              >
              
            </li>
            <li class=" active">
              <router-link
                to="/agents"
                data-toggle="dropdown"
                class="dropdown-toggle menu-item"
                >agents</router-link
              >
            </li>
            <li class=" active">
              <router-link
                to="/about"
                data-toggle="dropdown"
                class="dropdown-toggle menu-item"
                >about us</router-link
              >
            </li>
            <li class=" active">
              <router-link
                to="/contact"
                data-toggle="dropdown"
                class="dropdown-toggle menu-item"
                >contact</router-link
              >
            </li>
            <li class=" active" v-if="isLogin">
              <router-link
                to="/profile"
                data-toggle="dropdown"
                class="dropdown-toggle menu-item"
                >profile</router-link
              >
            </li>
          </ul>
          <!-- Module Signup  -->
          <div class="module module-login pull-left">
          

            <a class="btn-popup" v-show="!isLogin" data-toggle="modal" data-target="#signupModule">Login</a>
            <a class="btn-popup" v-if="isLogin" @click="logout" >Logout</a>
            <div
              class="modal register-login-modal fade"
              tabindex="-1"
              role="dialog"
              id="signupModule"
            >
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-body">
                    <div class="row">
                      <!-- Nav tabs -->
                      <ul class="nav nav-tabs">
                        <li class="active">
                          <a href="#login" data-toggle="tab">login</a>
                        </li>
                        <li><a href="#signup" data-toggle="tab">signup</a></li>
                      </ul>
                      <!-- Tab panes -->
                      <div class="tab-content">
                        <div class="tab-pane fade in active" id="login">
                          <div class="signup-form-container text-center">
                            
                            <SignInForm @closeModal="closeModal" />
                            <!-- form  end -->
                          </div>
                          <!-- .signup-form end -->
                        </div>
                        <div class="tab-pane" id="signup">
                          
                          <SignUpForm @closeModal="closeModal" />
                          <!-- form  end -->
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
              </div>
              <!-- /.modal -->
            </div>


            <!-- <div
              class="modal register-login-modal fade"
              tabindex="-1"
              role="dialog"
              id="otpModule"
              data-backdrop="static" data-keyboard="false" 
            >
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-body">
                    <div class="row">
                      
                      <ul class="nav nav-tabs">
                        <li class="active">
                          <a href="#otp" data-toggle="tab">verify otp</a>
                        </li>
                      </ul>
                      
                      <div class="tab-content">
                        <div class="tab-pane fade in active" id="otp">
                          <span>PLease do not refresh page </span>
                            <OtpVerificationForm @closeOtp="closeOtp" />
                          
                        </div>
                        
                      </div>
                    </div>
                  </div>
                 
                </div>
                
              </div>
             
            </div> -->
          </div>
          
          {{userRole}}
          <div class="module module-property pull-left" v-if="isLogin && userRole != 0 && userRole != 1"  >
            <router-link to="/add-property" target="_blank" class="btn"
              ><i class="fa fa-plus"></i> add property </router-link
            >
          </div>
        </div>
        
      </div>
      
    </nav>
  </header>
</template>
<script type="text/javascript" src="/js/jquery-1.11.3.js"></script>

<script>
import OtpVerificationForm from './Forms/OtpVerificationForm.vue';
import SignInForm from './Forms/SignInForm.vue';
import SignUpForm from './Forms/SignUpForm.vue';

export default {
  components: { SignInForm, SignUpForm, OtpVerificationForm },
  data(){
    return {
      role : 0
    }
  },
  computed : {
    isLogin(){
      return this.$store.state.isLogin  
    },
    userRole(){
     
      if(this.$store.state.user.role){
        return this.$store.state.user.role
      } else {
        return 0
      }
    }
  },
  watch : {
    '$store.state.user' : {
            handler: function() {
             /*  console.log("hrp m ae"); */
            },
        deep: true,
        // immediate: true
      }
  },
  methods : {
    closeModal(){
      $('#signupModule').modal("toggle")
      // $('#otpModule').modal("toggle")
    },
    closeOtp(){
      // $('#otpModule').modal("toggle")
    },
    logout(){
      if(window.confirm("Logout from website?")){
        localStorage.removeItem('userToken')
        localStorage.removeItem('user')
        this.$store.commit('setIsLogin',false)
        this.$store.commit('user',{})
        this.$router.push('/')
      }
    }
  }
};
</script>
    
<style>

</style>