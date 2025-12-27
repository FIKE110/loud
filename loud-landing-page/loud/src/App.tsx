import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ArrowRight, Check, Zap, Globe, 
  Shield,  Users, TrendingUp, 
   Mail, Phone, 
  MessageCircle, Camera, Lock, Palette, Briefcase,
   ShoppingCart,
  Loader2,
  XCircle


// Import Swiper styles
} from 'lucide-react'; 
import './App.css'
import {toast, Toaster} from 'sonner'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Pagination } from 'swiper/modules';

import 'swiper/css/pagination';

import 'swiper/css';
/**
 * THEME CONFIGURATION
 * Colors: Indigo (Innovation), Amber (Growth), Slate (Professional)
 */

// --- REUSABLE UI COMPONENTS ---

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-16 md:py-32 relative overflow-hidden px-4 sm:px-6 ${className}`}>
    {children}
  </section>
);

const Button = ({ children, variant = "primary", className = "", icon: Icon, ...props }: any) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3.5 rounded-full font-bold transition-all duration-300 transform active:scale-95 text-sm md:text-base w-full sm:w-auto group";
  const variants = {
    primary: "bg-[#01B2FE] text-white hover:bg-[#00a0e6] shadow-lg shadow-[#01B2FE]/30",
    secondary: "bg-white text-[#01B2FE] hover:bg-gray-50 shadow-md border border-gray-100",
    outline: "bg-transparent text-white border border-white/20 hover:bg-white/10 backdrop-blur-sm",
    priceOutline: "bg-transparent text-[#01B2FE] border-2 border-[#01B2FE] hover:bg-[#01B2FE] hover:text-white",
    accent: "bg-[#01B2FE] text-white hover:bg-[#00a0e6] shadow-lg shadow-[#01B2FE]/30",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg shadow-green-500/30"
  };

  return (
    <button className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>
      {children}
      {Icon && <Icon className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </button>
  );
};

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider bg-[#e6f7ff] text-[#01B2FE] border border-[#b3ecff] mb-6">
    {children}
  </span>
);



const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Features', href: '#features' },
    { name: 'Pre-order', href: '#pricing' },
    { name: 'Growth', href: '#growth' },
    { name: 'Team', href: '#team' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5 md:py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 md:w-10 md:h-10 bg-[#01B2FE] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">
            L
          </div>
          <span className={`text-xl md:text-2xl font-black tracking-tighter transition-colors ${isScrolled ? 'text-slate-900' : ' text-white'}`}>
            LOUD<span className="text-[#01B2FE]">!</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-bold uppercase tracking-widest hover:text-[#01B2FE] transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant="primary"
            className="px-6 py-2.5 text-xs uppercase tracking-widest"
            onClick={() => window.open('https://docs.google.com/forms/d/1iKlK5hbBVd7ShKb__WMHetwdke3iYpv_Jk2B_Tveo0M/edit', '_blank')}
          >
            Join Beta
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 rounded-lg bg-slate-100/50 text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 h-screen w-full bg-white z-[110] p-6 flex flex-col md:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-black">LOUD<span className="text-[#01B2FE]">!</span></span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-slate-100 rounded-full">
                <X />
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-black text-slate-900 border-b border-slate-100 pb-2"
                >
                  {link.name}
                </a>
              ))}
              {/* <div className="pt-10 flex flex-col gap-4">
                <Button onClick={() => window.open('https://docs.google.com/forms/d/1iKlK5hbBVd7ShKb__WMHetwdke3iYpv_Jk2B_Tveo0M/edit', '_blank')}>
                  Pre-order Now
                </Button>
                <Button variant="whatsapp" onClick={() => window.open('https://whatsapp.com/channel/0029VbBPWHuLikg8UnhPvF1r', '_blank')}>
                  WhatsApp Channel
                </Button>
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onOpenPreorder }: { onOpenPreorder: () => void }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <div id="hero" className="relative min-h-[90vh] md:min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <motion.div style={{ y: y1 }} className="absolute -top-20 -right-20 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-[#01B2FE]/20 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[200px] md:w-[600px] h-[200px] md:h-[600px] bg-[#01B2FE]/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          {/* <Badge>New Generation Tech</Badge> */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tighter">
            Defining Africa's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01B2FE] to-[#00a0e6]">Digital Future.</span>
          </h1>
          <p className="text-base md:text-xl text-slate-300 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
            Removing barriers for African small entrepreneurs through an ecosystem built on community, speed, and shared prosperity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              icon={ArrowRight} 
              // onClick={() => window.open('https://docs.google.com/forms/d/1iKlK5hbBVd7ShKb__WMHetwdke3iYpv_Jk2B_Tveo0M/edit', '_blank')}
              onClick={onOpenPreorder}
            >
              Pre-order Now
            </Button>
            <Button 
              variant="whatsapp" 
              icon={MessageCircle} 
              onClick={() => window.open('https://whatsapp.com/channel/0029VbBPWHuLikg8UnhPvF1r', '_blank')}
            >
              Join the Channel
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 50 }}
          className="relative hidden sm:flex items-center justify-center"
        >
          <img 
            src="/assets/img/about/about-app2.png" 
            alt="Loud App on Smartphone"
            className="w-full max-w-[280px] md:max-w-[320px] lg:max-w-[300px] h-auto object-contain transform transition-transform duration-700 hover:scale-105"
            style={{
              filter: 'drop-shadow(0 25px 25px rgba(0,0,0,0.3))'
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

const ValueProp = () => {
  const stats = [
    { label: "Faster Procurement", value: "95%", desc: "Automating systems for speed" },
    { label: "Cost Savings", value: "80%", desc: "Drastic reduction in overhead" },
    { label: "Better Pricing", value: "30%", desc: "Lower than global competitors" },
  ];

  return (
    <Section className="bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {stats.map((stat, idx) => (
            <div key={idx} className="px-4 py-4 sm:py-0">
              <h3 className="text-5xl md:text-6xl font-black text-[#01B2FE] mb-3 tracking-tighter">{stat.value}</h3>
              <p className="text-sm md:text-base font-black text-slate-900 uppercase tracking-widest mb-2">{stat.label}</p>
              <p className="text-slate-500 text-sm">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

type ProfileStatus = 'NO_PROFILE' | 'PROFILE_NO_PREORDER' | 'PROFILE_WITH_PREORDER';
 const backend_url=import.meta.env.VITE_BACKEND_URL;
  const mockCheckProfile = async (email: string): Promise<{ status: ProfileStatus; message?: string }> => {
   
  const response=await fetch(`${backend_url}/api/user/${email}`)
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  const { status,preorder ,freemium} = data;

  if(data.error){
    throw new Error(data.error);
  }
  return new Promise((resolve) => {

      if (status && preorder && !freemium) {
        resolve({ status: 'PROFILE_WITH_PREORDER', message: 'User has a preorder.' });
      } else if (status || freemium) {
        resolve({ status: 'PROFILE_NO_PREORDER',message:freemium ? 'true' : 'false'});
      } else {
        resolve({ status: 'NO_PROFILE' });
      }
  });
};

const mockProcessPaymentAlready = async (formData:{
    package_code: string;
},email:string): Promise<string> => {
  const response=await fetch(`${backend_url}/api/paystack/initialize`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ package_code: formData.package_code,email }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const {authorization_url} = await response.json();
  return authorization_url;
};

const mockProcessPayment = async (formData:{
    first_name: string;
    last_name: string;
    gender: string;
    package_code: string;
},email:string): Promise<string> => {
  const response=await fetch(`${backend_url}/api/user/register-and-pay`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...formData,email }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const {authorization_url} = await response.json();
  return authorization_url;
};

const mockProcessFreemium = async (formData:{
    first_name: string;
    last_name: string;
    gender: string;
    package_code: string;
},email:string): Promise<string> => {
  const response=await fetch(`${backend_url}/api/user/register-freemium`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...formData,email }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const {message} = await response.json();
  return message;
};

const PreorderModal = ({ isOpen, onClose, currentStep }: { isOpen: boolean; onClose: () => void; currentStep?: 'email' | 'details' | 'payment' | 'success' }) => {
  const [step, setStep] = useState<'email' | 'details' | 'payment' | 'success'>('email');
  const [loading, setLoading] = useState(false);
  
  // Form Data
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    gender: 'rather not say',
    package_code: 'FREEMIUM'
  });

  const [isNewUser, setIsNewUser] = useState(true);

  // Reset state when opening
  useEffect(() => {
    if (isOpen) {
      setStep('email');
      setIsNewUser(true);
      setEmail('');
      setFormData({ first_name: '', last_name: '', gender: 'rather not say', package_code: 'FREEMIUM' });
      setLoading(false);
    }
  }, [isOpen]);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    
    e.preventDefault();
    setIsNewUser(true)
    if (!email.includes('@')) {
      toast.error("A valid Email is required");
      return;
    }

    setLoading(true);
    try {
      const result = await mockCheckProfile(email);
      
      
      if (result.status === 'PROFILE_WITH_PREORDER') {
        toast.info("User has a preorder. Check your email for more information.");
        onClose();
      } else if (result.status === 'PROFILE_NO_PREORDER') {
        setStep('details');
        setIsNewUser(false) // But in render logic, we'll only show package field
        result.message==='true' ?
          toast.success("You are already on the freemium")
        :
        toast.success("Welcome back! Please select your package.");
      } else {
        setStep('details');
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
   
    }
  };

  const handleDetailsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();   

    if (step === 'details' && !formData.first_name ) {
      setIsNewUser(false) 
    }

    if (formData.package_code === 'FREEMIUM') {
      handleFreemiumRegistration(isNewUser);
    } else {
      setStep('payment');
      handlePayment(isNewUser);
    }
  };

  const handleFreemiumRegistration = async (isNewUser: boolean) => {
    try {
      const message = await mockProcessFreemium(formData, email)
      setStep('success');
      toast.success(message);
    
    } catch (err) {
      setStep('details');
      toast.error("Freemium registration failed. Please try again.");
    }
  };

  const handlePayment = async (isNewUser: boolean) => {

    try {
      const url = isNewUser
        ? await mockProcessPayment(formData, email)
        : await mockProcessPaymentAlready(formData, email);
      setStep('success');
      setTimeout(()=>{
         window.location.href=url
      },300)

      // toast.success("Transaction Intialized");
    
    } catch (err) {
      setStep('details');
      toast.error("Payment failed. Please try again.");
    }
  };


  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Modal Header */}
            <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div>
                <h3 className="text-xl font-black text-slate-900">Pre-order LOUD!</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-[#01B2FE]">
                  {step === 'email' && 'Step 1: Verification'}
                  {step === 'details' && 'Step 2: Profile Details'}
                  {step === 'payment' && 'Step 3: Payment Gateway'}
                  {step === 'success' && 'Confirmed'}
                </p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <X size={20} className="text-slate-500" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              {step === 'email' && (
                <form onSubmit={handleEmailSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#01B2FE] focus:ring-2 focus:ring-[#b3ecff] outline-none transition-all font-medium"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="text-xs text-slate-500 mt-2">
                      We'll check if you already have a profile with us.
                    </p>
                  </div>
                  <Button className="w-full" disabled={loading}>
                    {loading ? <Loader2 className="animate-spin" /> : 'Continue'}
                  </Button>
                </form>
              )}

              {step === 'details' && (
                <form onSubmit={handleDetailsSubmit} className="space-y-4">
                  {isNewUser && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2 sm:col-span-1">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">First Name</label>
                        <input 
                          type="text" 
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#01B2FE] outline-none font-medium"
                          value={formData.first_name}
                          onChange={(e) => setFormData({...formData, first_name: e.target.value})}
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Last Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#01B2FE] outline-none font-medium"
                          value={formData.last_name}
                          onChange={(e) => setFormData({...formData, last_name: e.target.value})}
                        />
                      </div>
                      <div className="col-span-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Gender</label>
                        <select 
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#01B2FE] outline-none font-medium bg-white"
                          value={formData.gender}
                          onChange={(e) => setFormData({...formData, gender: e.target.value})}
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="rather not say">Rather not say</option>
                        </select>
                      </div>
                    </div>
                  )}

                  <div className="pt-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Select Package</label>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { code: 'FREEMIUM', name: 'Freemium ($0)' },
                        { code: 'OFFER_1', name: 'Offer 1 ($80.40)' },
                        { code: 'OFFER_2', name: 'Offer 2 ($360.00)' },
                        { code: 'OFFER_3', name: 'Offer 3 ($42.00)' },
                        { code: 'OFFER_4', name: 'Offer 4 ($754.80)' }
                      ].map((pkg) => (
                        <label 
                          key={pkg.code} 
                          className={`flex items-center p-3 border rounded-xl cursor-pointer transition-all ${
                            formData.package_code === pkg.code 
                              ? 'border-[#01B2FE] bg-[#e6f7ff] ring-1 ring-[#01B2FE]' 
                              : 'border-slate-200 hover:border-[#b3ecff]'
                          }`}
                        >
                          <input 
                            type="radio" 
                            name="package" 
                            className="hidden" 
                            checked={formData.package_code === pkg.code}
                            onChange={() => setFormData({...formData, package_code: pkg.code})}
                          />
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${formData.package_code === pkg.code ? 'border-[#01B2FE] bg-[#01B2FE]' : 'border-slate-300'}`}>
                            {formData.package_code === pkg.code && <Check size={12} className="text-white" />}
                          </div>
                          <span className="font-bold text-slate-900">{pkg.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full mt-6">
                    {formData.package_code === 'FREEMIUM' ? 'Subscribe' : 'Proceed to Payment'}
                  </Button>
                </form>
              )}

              {step === 'payment' && (
                <div className="py-12 text-center">
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-[#01B2FE] rounded-full border-t-transparent animate-spin"></div>
                    <Lock className="absolute inset-0 m-auto text-slate-300" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Initializing Secure Gateway...</h4>
                  <p className="text-slate-500 text-sm">Please do not close this window.</p>
                </div>
              )}

              {step === 'success' && (
                <div className="py-8 text-center">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-500/20">
                    <Check size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">
                    {formData.package_code === 'FREEMIUM' ? 'Subscription Successful!' : 'Pre-order Payment initialized'}
                  </h3>
                  <p className="text-slate-500 mb-8 max-w-xs mx-auto">
                    {formData.package_code === 'FREEMIUM' 
                      ? `You have successfully subscribed to the Freemium plan. We'll send a confirmation email to ${email}.`
                      : `We'll send a confirmation email to ${email} after payment.`
                    }
                  </p>
                  <Button variant="outline" className="text-[#01B2FE] border-[#b3ecff] hover:bg-[#e6f7ff] w-full" onClick={onClose}>
                    Close
                  </Button>
                </div>
              )}
            </div>
            
            {/* Footer for steps */}
            {step !== 'success' && step !== 'payment' && (
               <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
                 <div className="flex items-center gap-1">
                   {/* <Lock size={12} /> Secure 256-bit SSL Encrypted */}
                 </div>
                 {step === 'details' && (
                   <button onClick={() => setStep('email')} className="text-slate-400 hover:text-slate-600">Back</button>
                 )}
               </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};


const Features = () => {
  const features = [
    { icon: Zap, title: "Speed", desc: "Top-notch performance for connectivity." },
    { icon: TrendingUp, title: "Efficiency", desc: "Maximize output with smart automation." },
    { icon: Users, title: "Community", desc: "Tagging systems for closer networking." },
    { icon: Lock, title: "Safety", desc: "Crafted security for younger generations." },
    { icon: Palette, title: "Custom", desc: "Unique profile themes and expression." },
    { icon: MessageCircle, title: "Instant", desc: "Engage globally with real-time chat." },
    { icon: Camera, title: "Visuals", desc: "Share stories through high-def media." },
    { icon: Shield, title: "Security", desc: "Enterprise-grade safety for peace of mind." },
  ];

  return (
    <Section id="features" className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-2">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <Badge>Core Features</Badge>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Expressively <span className="text-[#01B2FE]">Loud.</span></h2>
          <p className="text-slate-600 text-sm md:text-lg px-4 font-medium">Giving African voices expression into the deepest fabrics of the world.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 bg-[#e6f7ff] rounded-xl md:rounded-2xl flex items-center justify-center mb-5">
                <f.icon className="w-5 h-5 md:w-7 md:h-7 text-[#01B2FE]" />
              </div>
              <h3 className="text-sm md:text-xl font-black text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-500 text-[10px] md:text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};




const Pricing = ({ onOpenPreorder }: { onOpenPreorder: () => void }) => {
  const plans = [
    {
      name: "FREEMIUM",
      price: "0",
      priceDetails: "Lifetime Free Access",
      description: "Connect with family and friends, share updates, and more.",
      features: [
        "Connect with family and friends",
        "Share update/posts",
        "Comment and share gifts with friends",
        "Experience global birthday mate event on feed",
        "Monetize @500 followers and earn 50% UGC revenue",
      ],
      buttonVariant: "priceOutline",
      highlight: false,
    },
    {
      name: "OFFER 1",
      price: "80.40",
      priceDetails: "$6.7/12mnth $6.7/M after launch",
      description: "Save 50% subscription amount for Life. 100% money back if you didn’t find your proposed value.",
      features: [
        "Pre-launch pricing",
        "Only 100 slots available",
        "Available till January 20, 2026",
        "Subscribers will get 50% and pay $3.4/month; from January 1, 2027",
        "Discover 100% private projects on platform",
        "Instant verification from launch day",
        "Bid submission, reminders and contract award",
      ],
      buttonVariant: "primary",
      highlight: true,
    },
    {
      name: "OFFER 2",
      price: "360",
      priceDetails: "$360/12mnth $30/m after launch",
      description: "Save 50% subscription amount for Life. 100% money back if you didn’t find your proposed value.",
      features: [
        "Pre-launch pricing",
        "Only 100 slots available",
        "Available till January 20, 2026",
        "Subscribers will get 50% and pay $15/month; from January 1, 2027",
        "Discover 100% all projects on platform",
        "Instant verification from launch day",
        "Bid submission, reminders and search optimization, AI project assist and contract award",
      ],
      buttonVariant: "priceOutline",
      highlight: false,
    },
    {
      name: "OFFER 3",
      price: "42",
      priceDetails: "$3.5/12mnths $3.5/M after launch",
      description: "Save 50% subscription amount for Life. Only 100 slots available.",
      features: [
        "Creator Economy Payout",
        "Available till January 20, 2026",
        "Subscribers will get 50% and pay $1.75/month; from January 1, 2027",
        "Monetization from the third month after launch",
        "Instant verification from launch day",
        "Direct community access and support",
      ],
      buttonVariant: "primary",
      highlight: true,
    },
    {
      name: "OFFER 4",
      price: "754.80",
      priceDetails: "$62.9/12mths $62.9/M after launch",
      description: "Save 50% subscription amount for Life. Only 100 slots available.",
      features: [
        "Partnership Program",
        "Available till January 20, 2026",
        "Subscribers will get 50% and pay $31.5/month; from January 1, 2027",
        "Receive divined",
        "Instant verification from launch day",
        "Access to all premium features",
      ],
      buttonVariant: "priceOutline",
      highlight: false,
    },
  ];

  const onSwiper = (swiper: SwiperType) => {
  console.log(swiper.activeIndex);
};


  return (
    <Section id="pricing" className="bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <Badge>Pre-order & Reserve</Badge>
          <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Invest in Your <span className="text-[#01B2FE]">Prosperity.</span></h2>
          <p className="text-slate-500 text-sm md:text-lg mb-10 max-w-xl mx-auto px-4 font-medium">
            Lock in early-bird rates and priority access. Official launch coming soon.
          </p>
        </div>


          <Swiper
            onSwiper={onSwiper}
             navigation={true}
            spaceBetween={40}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 40
              }
            }}
            className='h-[700px] px-4 md:px-0'
          >
            {plans.map((plan, i) => (
              <SwiperSlide key={i} className="h-full w-full flex">
                <motion.div
                  whileHover={{
                    y: -15,
                    boxShadow: "0 25px 50px -12px rgba(1, 178, 254, 0.15)",
                    borderColor: "rgba(1, 178, 254, 0.4)"
                  }}
                   className={`p-8 md:p-10 rounded-[2.5rem] border-2
    flex flex-col h-full w-full md:w-96
    transition-all duration-500 relative
    ${
      plan.highlight
        ? 'bg-slate-900 text-white border-[#01B2FE] shadow-2xl'
        : 'bg-white text-slate-900 border-slate-100'
    }
  `}
            >
              {/* {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )} */}

              <div className="">
                <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-black tracking-tighter">
                    ${plan.price}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{plan.description}</p>
                <p className={`text-xs mt-2 ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{plan.priceDetails}</p>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check size={18} className={plan.highlight ? 'text-[#01B2FE]' : 'text-[#01B2FE]'} />
                    <span className={`text-sm font-bold ${plan.highlight ? 'text-slate-200' : 'text-slate-700'}`}>{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.buttonVariant} 
                className="w-full text-xs uppercase tracking-widest py-4 group"
                icon={ShoppingCart}
                onClick={plan.name === 'FREEMIUM' ? onOpenPreorder : onOpenPreorder}
              >
                {plan.name === 'FREEMIUM' ? 'Get Started' : 'Pre-order Now'}
              </Button>
            </motion.div>
            </SwiperSlide>
          ))}
          </Swiper>

      </div>
    </Section>
  );
};

const StoryAndVision = () => {
  return (
    <Section id="story" className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <Badge>Our Mission</Badge>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Why LOUD! Matters</h2>
            <p className="text-slate-600 text-base md:text-xl leading-relaxed mb-6 font-medium">
              Africa's social space needs to be secured and the people's voice needs to be heard. We decided to contribute our quota from the social sector because we believe Africa's technologies are rising.
            </p>
            <p className="text-slate-600 text-base md:text-xl leading-relaxed font-medium">
              Loud is built to give expression and sound Loud into the deepest fabrics of the world.
            </p>
          </div>

          <motion.div 
             whileHover={{ scale: 1.02 }}
             className="order-1 lg:order-2 bg-[#00567a] rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 text-white relative overflow-hidden shadow-2xl"
          >
             <div className="absolute top-0 right-0 w-48 md:w-80 h-48 md:h-80 bg-[#01B2FE]/30 rounded-full blur-[60px] md:blur-[100px] -translate-y-1/2 translate-x-1/3" />
             <div className="relative z-10">
               <div className="w-12 h-1 bg-[#01B2FE] mb-8" />
               <h3 className="text-2xl md:text-4xl font-black mb-6 leading-tight">"Creating an infrastructure of shared prosperity."</h3>
               <p className="text-sm md:text-lg text-[#e6f7ff] font-bold uppercase tracking-widest mb-10">The Vision</p>
               <div className="flex items-center gap-4">
                 <div className="h-2 flex-1 bg-[#00344a] rounded-full overflow-hidden">
                   <div className="h-full w-[85%] bg-[#01B2FE] rounded-full" />
                 </div>
                 <span className="text-[10px] font-black text-[#01B2FE] uppercase tracking-widest">Active</span>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

const GrowthStrategy = () => {
  const strategies = [
    { icon: TrendingUp, label: "IPO" },
    { icon: Users, label: "Merger" },
    { icon: Briefcase, label: "Sales" },
    { icon: Globe, label: "Equity" },
    { icon: Shield, label: "Buyout" },
    { icon: Check, label: "Exit" },
  ];

  return (
    <Section id="growth" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <Badge>Scalability</Badge>
        <h2 className="text-3xl md:text-6xl font-black mb-6 tracking-tighter">Growth Roadmap</h2>
        <p className="text-slate-400 text-sm md:text-xl max-w-2xl mx-auto mb-16 font-medium">
          Our path to IPO is robust. We are open to strategic partnerships that fuel our vision for a digital Africa.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {strategies.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 md:p-8 bg-white/5 rounded-2xl md:rounded-3xl border border-white/10 flex flex-col items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#01B2FE] rounded-full flex items-center justify-center shadow-lg shadow-[#01B2FE]/20">
                <s.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <span className="font-black text-[10px] md:text-xs uppercase tracking-[0.2em]">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const Team = () => {
  const team = [
    { name: "Sylvester Okafor", role: "Founder & CEO", img: "/assets/img/person.jpg" },
    { name: "Barr. Sonny Olajide", role: "Legal Director", img: "/assets/img/editperson7.jpg" },
    { name: "Isaiah Omame", role: "CTO", img: "/assets/img/person6.jpg" },
    { name: "Godwin Ngusen J.", role: "Engineering Mgr", img: "/assets/img/person1.jpg" },
    { name: "Stephen O'Meara", role: "Board Chairman", img: "/assets/img/person2.jpg" },
    { name: "Kaushik GD", role: "Vice Chairman", img: "/assets/img/person4.jpg" },
    { name: "Vineeta Dixit", role: "Advisor", img: "/assets/img/person5.jpg" },
    { name: "Vanessa Haripersad", role: "Brand Management", img: "/assets/img/editperson3.jpg" },
  ];

  return (
    <Section id="team" className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Our Leadership</h2>
          <p className="text-slate-500 text-base md:text-xl max-w-2xl mx-auto font-medium">
            Over 50 years of collective expertise in technology, law, and market management.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10">
          {team.map((member, i) => (
            <div key={i} className="group relative">
              <div className="aspect-[4/5] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-slate-100 mb-4 shadow-sm group-hover:shadow-xl transition-all border border-slate-50">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
              <div className="text-center px-2">
                <h3 className="text-sm md:text-lg font-black text-slate-900 leading-tight mb-1">{member.name}</h3>
                <p className="text-[9px] md:text-xs text-[#01B2FE] font-bold uppercase tracking-widest">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-8 text-white">
            <div className="w-10 h-10 bg-[#01B2FE] rounded-xl flex items-center justify-center font-black text-xl">L</div>
            <span className="text-2xl font-black">LOUD<span className="text-[#01B2FE]">!</span></span>
          </div>
          <p className="text-sm md:text-base leading-relaxed text-slate-400 mb-8 max-w-xs mx-auto md:mx-0 font-medium">
            Giving expression to African voices and letting them sound Loud in the global market.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
             <a href="https://whatsapp.com/channel/0029VbBPWHuLikg8UnhPvF1r" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all">
               <MessageCircle className="w-5 h-5" />
             </a>
             <a href="mailto:support@loudproductslimited.com" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#01B2FE] hover:text-white transition-all">
               <Mail className="w-5 h-5" />
             </a>
             <a href="https://www.linkedin.com/company/loud-products-limited1/" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
             </a>
          </div>
        </div>
        
        <div className="text-center md:text-left">
          <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Contact</h4>
          <ul className="space-y-6 text-sm font-bold">
            <li className="flex flex-col md:flex-row items-center gap-3">
              <Phone className="w-4 h-4 text-[#01B2FE]" />
              <span>07065427513, 09156094521</span>
            </li>
            <li className="flex flex-col md:flex-row items-center gap-3">
              <Mail className="w-4 h-4 text-[#01B2FE]" />
              <span>support@loudproductslimited.com</span>
            </li>
          </ul>
        </div>

        <div className="hidden md:block">
          <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Quick Links</h4>
          <ul className="space-y-4 text-sm font-bold">
            <li><a href="#story" className="hover:text-[#01B2FE] transition-colors">Our Story</a></li>
            <li><a href="#pricing" className="hover:text-[#01B2FE] transition-colors">Pre-order</a></li>
            <li><a href="#growth" className="hover:text-[#01B2FE] transition-colors">Roadmap</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8 text-center md:text-left">Get Involved</h4>
          <div className="flex flex-col gap-3">
            <input type="email" placeholder="Email for updates" className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 w-full text-sm outline-none focus:ring-2 focus:ring-[#01B2FE] transition-all text-white font-medium" />
            <Button variant="primary" className="w-full text-xs uppercase tracking-widest">Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 pt-10 text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">
        <p>© 2025 LOUD! TECHNOLOGIES INC. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  </footer>
);

const mockVerifyTransaction = async (reference: string): Promise<string> => {
  
  return new Promise((resolve, reject) => {
       if(!reference) return;
    fetch(`${backend_url}/api/paystack/verify/${reference}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.status === 'success'){
          toast.success("Payment verified successfully!");
          resolve(data.email)
        
        } else {
          toast.error("Payment verification failed.");
        }
      })
      .catch(err => {
        console.error(err);
        reject("Invalid reference")
        toast.error("An error occurred during payment verification.");
      });
  });
};


const PreorderVerificationModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (isOpen) {
     
 
       const params = new URLSearchParams(window.location.search);
    const reference = params.get('reference');


      if (reference) {
        setStatus('verifying');
        mockVerifyTransaction(reference)
          .then((verifiedEmail) => {
            setEmail(verifiedEmail);
            setStatus('success');

            window.history.replaceState({}, '', window.location.pathname);
          })
          .catch(() => {
            setStatus('error');
          });
      } else {
        setStatus('error');
      }
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[160] flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="absolute inset-0 bg-slate-900/70 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden p-8 text-center"
          >
            {status === 'verifying' && (
              <div className="py-12">
                 <div className="w-16 h-16 border-4 border-[#b3ecff] border-t-[#01B2FE] rounded-full animate-spin mx-auto mb-6"/>
                 <h3 className="text-xl font-bold text-slate-900 mb-2">Verifying Transaction...</h3>
                 <p className="text-slate-500 text-sm">Please wait while we confirm your preorder.</p>
              </div>
            )}

            {status === 'success' && (
              <div className="py-8">
                 <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-500/20">
                    <Check size={40} />
                 </div>
                 <h3 className="text-2xl font-black text-slate-900 mb-2">Pre-order Verified!</h3>
                 <p className="text-slate-500 mb-8">
                  Your payment for the pre-order has been successfully confirmed
                  <span className="font-bold text-slate-900"> {email} </span>.
                  Check your email for your receipt and further instructions.
                </p>
                 <Button variant="primary" className="w-full" onClick={onClose}>
                   Ok
                 </Button>
              </div>
            )}

            {status === 'error' && (
              <div className="py-8">
                 <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <XCircle size={40} />
                 </div>
                 <h3 className="text-2xl font-black text-slate-900 mb-2">Verification Failed</h3>
                 <p className="text-slate-500 mb-8">
                   We couldn't verify this transaction reference. It may be invalid or expired.
                 </p>
                 <Button variant="secondary" className="w-full" onClick={onClose}>
                   Close
                 </Button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// --- MAIN LAYOUT ---

const App = () => {

  const [isPreorderModalOpen, setPreorderModalOpen] = useState(false);

  const [isPreorderModalVerificationOpen, setPreorderModalVerificationOpen] = useState(false);

  useEffect(() => {
    if(window.location.pathname=="/payment-success"){
      setPreorderModalVerificationOpen(true);
    }
  },[])


  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-[#01B2FE] selection:text-white overflow-x-hidden scroll-smooth">
      <Navbar />
      <main>
        <Hero onOpenPreorder={() => setPreorderModalOpen(true)} />
        <ValueProp />
        <Features />
        <Pricing onOpenPreorder={() => setPreorderModalOpen(true)}/>
        <StoryAndVision />
        <GrowthStrategy />
        <Team />
        <PreorderVerificationModal isOpen={isPreorderModalVerificationOpen} onClose={()=>setPreorderModalVerificationOpen(false)} />
        <PreorderModal isOpen={isPreorderModalOpen} onClose={() => setPreorderModalOpen(false)} />
        <Toaster  />
      </main>
      <Footer />
    </div>
  );
};

export default App;