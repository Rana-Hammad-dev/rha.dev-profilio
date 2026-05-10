import React from 'react';
import { PROFILE_PIC } from '../constants'

const ProfileImage = ({ size = "large" }) => {
  const isLarge = size === "large";
  const dim = isLarge ? "w-64 h-64 md:w-96 md:h-96" : "w-48 h-48";

  return (
    <div className={`relative ${dim}`}>
      <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>

      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="animate-orbit absolute left-1/2 top-1/2 -ml-6 -mt-6 p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSU4MxiRqiI30iR6qB7ahfJxiMzB02mm_M37_DCfBRayGH-dsCyeDnSDj-DQ9XLk_y0IJPy-HvIljpQa5tVq5zrz5o-D2gsJ-XVfytJ-Y_TIo_GRaF-tdm2GAWuGvWJwGNAmNTqaOB3ni33yQGQoHrXIjgqcdhtkYgbK48_LR9JzrFSfedwu_O9sgoya-E4IaumPB4M91zECfFYPYM-MyEtXkMcApbJnhAgHnHkcPTHVLcOzOP9sS3tBfFeF1z9OHCWbAuzJkNX6Q" className="w-8 h-8" alt="React" />
        </div>
        <div className="animate-orbit-reverse absolute left-1/2 top-1/2 -ml-6 -mt-6 p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl" style={{ animationDelay: '-2s' }}>
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjjeZGFZWaCuUFsg75KUA-kJv8QaVJNUAsL4Xw7HMQOIMfDo90mIv10JjTEksR7QrRj6D_dHto9vMOkZfDxws-NC1X9zsdooPI2-LHN_vt4xFNVMtw4AGRxJ3nlwVZqugl15TznfZ4FSZJSD5x4NaFsvo6-cw99R0R5jRB-Sj8IOmqg2BlLurZxIl4mpQOWi95zFEI8EXzCcr-jASkpTwwozAil4Nd2ACrtpRv-vXHvXHtAnAWzlsAUJUEqhVKPwb_X0H4vjbP6F4" className="w-8 h-8" alt="Node" />
        </div>
        <div className="animate-orbit absolute left-1/2 top-1/2 -ml-6 -mt-6 p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl" style={{ animationDelay: '-4s' }}>
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGgYBcrBzlRi7MziMcz6w9c5XSJfxWavQyP1KLkyB1ACyH8j3Lb5LtgBuzeM1qLzo4tG6lVNLjAuQI1AItyP5HLzIZm3qDIy66S07qJmHqQg6spBiFhAYkzkV39fBltssYt2mOKDwdwbn4gogf8r7oJUh3IDdk2wQ1hzJIjmmQMbJMXAU3uAYmkzk4Ng7TXC9yXQ0w_sD8jNIKpSlg5mvzK3wBKgoui1FBX8lgvfQjes9thRcUsJXNMbzIuzOCNh54609evyCjxdA" className="w-8 h-8" alt="Express" />
        </div>
        <div className="animate-orbit-reverse absolute left-1/2 top-1/2 -ml-6 -mt-6 p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl" style={{ animationDelay: '-6s' }}>
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq9VZJgPi7GwcmPc_jMNcrStOANQk7zYlwW6CPdAEwAvFYV7hOmHlQ_rySqp2WWrELH6vOmNolaxLE_PY_OpzKCk5sIOsMSZX7HUfI1wT4VcuJ8iOJU461GHizEdcQ00YJXXLRHmF51VYCV9imh47Xil75IEEiOU8g1jk5X77S9EmwDSqHhpfUp2bT-HJCWD_vajtcKJO_2iu7gUvaFieCq35b_tLuGWIeagLoMD46UTpWdT835vT_O4-isxnlDKHXV8p1NRff-wc" className="w-8 h-8" alt="MongoDB" />
        </div>
        <div className="animate-orbit absolute left-1/2 top-1/2 -ml-6 -mt-6 p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl" style={{ animationDelay: '-8s' }}>
          <img src="https://avatars.githubusercontent.com/u/30317861?s=200&v=4" className="w-8 h-8 p-1" alt="Tailwind" />
        </div>
        <div className="animate-orbit-reverse absolute left-1/2 top-1/2 -ml-6 -mt-6 p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl" style={{ animationDelay: '-10s' }}>
          <img src="https://avatars.githubusercontent.com/u/1322138?s=200&v=4" className="w-8 h-8" alt="TypeScript" />
        </div>
        <div className="animate-orbit absolute left-1/2 top-1/2 -ml-6 -mt-6 p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl" style={{ animationDelay: '-12s' }}>
          <img src="https://avatars.githubusercontent.com/u/2723708?s=200&v=4" className="w-8 h-8 p-1" alt="Docker" />
        </div>
        <div className="animate-orbit-reverse absolute left-1/2 top-1/2 -ml-6 -mt-6 p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl" style={{ animationDelay: '-14s' }}>
          <img src="/react.jpg" className="w-8 h-8" alt="Reactjs" />
        </div>
      </div>

      <div className="w-full h-full rounded-full border-2 border-primary/20 p-4 relative overflow-hidden group">
        <div className="w-full h-full rounded-full border-2 border-primary/40 p-4">
          <img 
            src={PROFILE_PIC} 
            alt="Rana Hammad Ali" 
            className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-700"/>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
