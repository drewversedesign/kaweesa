
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-4xl font-bold mb-6"
            >
              About KAWEESA CHILDREN'S MINISTRY LIMITED
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-xl text-gray-600 mb-12"
              >
                We are a Ugandan foundation dedicated to transforming the lives of children through love, care, and comprehensive support programs.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                  <p className="text-gray-600">
                    KAWEESA CHILDREN'S MINISTRY LIMITED exists to provide holistic care for vulnerable children in Uganda, 
                    ensuring they have access to quality education, healthcare, protection, and the love they deserve.
                  </p>
                  <p className="text-gray-600">
                    We believe every child deserves a chance to thrive, regardless of their circumstances. Through our 
                    comprehensive programs, we work to break cycles of poverty and create pathways to brighter futures.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Love:</strong> We approach every child with unconditional love and compassion.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Integrity:</strong> We maintain the highest standards of transparency and accountability.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Excellence:</strong> We strive for excellence in every program and service we provide.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Community:</strong> We believe in the power of community to transform lives.</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                  <p className="text-gray-600 mb-4">
                    Founded with a heart for Uganda's most vulnerable children, KAWEESA CHILDREN'S MINISTRY LIMITED 
                    began as a grassroots initiative to address the immediate needs of children in our local communities.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Over the years, we have grown from helping a handful of children to supporting hundreds of families 
                    across multiple communities. Our comprehensive approach addresses not just immediate needs but works 
                    to create sustainable, long-term solutions.
                  </p>
                  <p className="text-gray-600">
                    Today, we continue to expand our reach while maintaining our core commitment to treating every child 
                    with dignity, respect, and love. We work closely with local communities, schools, and healthcare 
                    providers to ensure our programs make a lasting impact.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Leadership</h2>
                <p className="text-gray-600 mb-8">
                  Our team combines passionate dedication with professional expertise in child welfare, 
                  education, healthcare, and community development.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Sarah Kaweesa",
                      role: "Founder & Executive Director",
                      bio: "Dedicated to child welfare with over 15 years of experience in community development.",
                      image: "/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
                    },
                    {
                      name: "Dr. James Mukasa",
                      role: "Programs Director",
                      bio: "Leading our educational and health programs with expertise in child development.",
                      image: "/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
                    },
                    {
                      name: "Grace Nambi",
                      role: "Community Outreach Coordinator",
                      bio: "Connecting with families and communities to ensure our programs reach those in greatest need.",
                      image: "/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
                    }
                  ].map((member, i) => (
                    <Card key={i} className="bg-gray-50 border border-gray-100 overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden">
                            <img 
                              src={member.image} 
                              alt={member.name} 
                              className="w-full h-full object-cover" 
                            />
                          </div>
                          <h3 className="font-bold text-lg">{member.name}</h3>
                          <p className="text-orange-600 text-sm mb-2">{member.role}</p>
                          <p className="text-gray-600 text-sm">{member.bio}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link to="/volunteer" className="inline-flex items-center px-5 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all group">
                Join Our Mission
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
