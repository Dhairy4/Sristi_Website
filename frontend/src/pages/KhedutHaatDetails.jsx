import React, { useEffect } from 'react';
import khedutHaatImg from "../assets/khedut-haat.jpg";

const KhedutHaatDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-[#333] min-h-screen font-['Inter',sans-serif]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Title & Breadcrumb */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">SRISTI Prakutik Khedut Haat</h1>
          <div className="text-sm text-gray-500 font-medium">
            <span className="hover:text-emerald-600 cursor-pointer">Home</span> / SRISTI Prakutik Khedut Haat
          </div>
        </div>

        {/* About Section - 2 Columns */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">About Khedut Haat</h3>
            <div className="space-y-6 text-gray-600 text-[16px] leading-[1.8]">
              <p>Khedut Haat is a weekly farmers’ market that creates a direct bridge between organic farmers and consumers. It provides a transparent, farmer-friendly platform where producers sell their fresh, chemical-free produce without the involvement of middlemen. This not only ensures that 100% of the revenue goes directly to the farmers but also builds trust and long-term relationships between farmers and consumers. By promoting eco-friendly and natural farming practices, Khedut Haat strengthens the local food system while encouraging healthier lifestyles.</p>
              <p>To maintain credibility and trust, the SRISTI Innovations team regularly conducts on-field farm verifications based on 30–35 sustainability parameters. These assessments document farming methods, validate adherence to natural practices, and ensure that consumers receive authentic, chemical-free products. This rigorous process helps farmers sustain organic standards and assures buyers of genuine quality.</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={khedutHaatImg} alt="Khedut Haat" className="w-full h-auto object-cover rounded-md shadow-sm" />
          </div>
        </div>

        {/* Full width text section */}
        <div className="text-gray-600 text-[16px] leading-[1.8] space-y-6 mb-12">
          <p>Currently, around 120 farmers are associated with Khedut Haat, collectively generating sales of over ₹15 lakhs every week. The weekly markets are successfully organized across nine locations in Ahmedabad, Gandhinagar, Vadodara, Himmatnagar and Vallabh Vidyanagar, with expansion plans underway in Rajkot, and Surat.</p>
          <p>Khedut Haat is more than a marketplace. It is a movement towards sustainable agriculture, farmer empowerment, and healthier communities.</p>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Highlights</h3>
          <div className="space-y-4 text-gray-600 text-[16px] leading-[1.8]">
            <p><strong>Organic & Chemical-Free: </strong>Khedut Haat offers fruits, vegetables, pulses, spices, grains, flours, and edible oils—grown naturally, free from harmful chemicals.</p>
            <p><strong>Farmer Empowerment: </strong>Farmers directly connect with consumers, ensuring fair prices, eliminating middlemen, and gaining recognition for their efforts and knowledge.</p>
            <p><strong>Impact: </strong>With weekly sales crossing ₹15 lakhs across seven campuses in Ahmedabad, Gandhinagar, Vadodara, Himmatnagar and Vallabh Vidyanagar, Khedut Haat significantly boosts farmers’ incomes and livelihoods.</p>
            <p><strong>Youth & Startups: </strong>Students and startups showcase innovative products, projects, and enterprises, encouraging entrepreneurship and strengthening the innovation ecosystem.</p>
            <p><strong>Sustainability: </strong>By supporting natural farming, Khedut Haat promotes eco-friendly agriculture, healthier lifestyles, and stronger, more resilient local food systems.</p>
          </div>
        </div>

        {/* Locations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Locations</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
            
            <div className="flex flex-col gap-4">
              <p className="text-gray-600 text-[16px] leading-[1.6]">Sardar Patel University (SPU),<br/>At Bhaikaka Library Campus,<br/>Opposite Shastri Maidan, Vallabh Vidyanagar</p>
              <iframe loading="lazy" className="w-full h-[250px] border-0 rounded" src="https://maps.google.com/maps?q=Sardar%20Patel%20University%20%28SPU%29%2C%20mota%20Bazaar%2C%20Vallabh%20Vidyanagar%2C%20Anand%2C%20Gujarat&t=m&z=13&output=embed&iwloc=near" title="Sardar Patel University"></iframe>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-gray-600 text-[16px] leading-[1.6]">Sarva Vidyalaya Kelavani Mandal (Kadi campus), Pharmacy Campus,<br/>Near GH-6 Circle, Gandhinagar</p>
              <iframe loading="lazy" className="w-full h-[250px] border-0 rounded" src="https://maps.google.com/maps?q=6MR3%2B9XW%20Gandhinagar%2C%20Gujarat&t=m&z=15&output=embed&iwloc=near" title="Kadi Campus"></iframe>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-gray-600 text-[16px] leading-[1.6]">Babasaheb Ambedkar Open University (BAOU) Campus, Sarkhej-Gandhinagar Highway,<br/>Charodi (Malabar Road), Ahmedabad</p>
              <iframe loading="lazy" className="w-full h-[250px] border-0 rounded" src="https://maps.google.com/maps?q=Jyotirmay%20Parisar%2C%20Sarkhej-Gandhinagar%20Highway%2C%20Chharodi%2C%20Sarkhej%20-%20Gandhinagar%20Hwy%2C%20opp.%20Shri%20Balaji%20Temple%2C%20Ahmedabad%2C%20Gujarat%20382481&t=m&z=15&output=embed&iwloc=near" title="BAOU Campus"></iframe>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-gray-600 text-[16px] leading-[1.6]">Navjeevan Trust Campus, Behind Gujarat Vidyapith, Near Income Tax Circle, Ashram Road, Ahmedabad</p>
              <iframe loading="lazy" className="w-full h-[250px] border-0 rounded" src="https://maps.google.com/maps?q=2HV8%2B89R%2C%20Post%20Navajivan%20Behind%20Vidyapeeth%2C%20Ashram%20Rd%2C%20Ahmedabad%2C%20Gujarat%20380009&t=m&z=13&output=embed&iwloc=near" title="Navjeevan Trust"></iframe>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-gray-600 text-[16px] leading-[1.6]">Shri Bhagwat Vidyapith,<br/>Mandir Campus,<br/>Sola, SG Highway, Ahmedabad</p>
              <iframe loading="lazy" className="w-full h-[250px] border-0 rounded" src="https://maps.google.com/maps?q=SHRI%20BHAGWAT%20VIDHYAPITH%2C%20Bhagwat%20Vidyapith%20Rd%2C%20Sola%2C%20Ahmedabad%2C%20Gujarat%20380060&t=m&z=13&output=embed&iwloc=near" title="Shri Bhagwat Vidyapith"></iframe>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-gray-600 text-[16px] leading-[1.6]">Atma Vikas Campus, Behind Electotherm,<br/>In Vraj-Gopi Bungalow Lane Palodia, Ahmedabad</p>
              <iframe loading="lazy" className="w-full h-[250px] border-0 rounded" src="https://maps.google.com/maps?q=Aatmavikas%2C%20Vraj%20Gopi%20Bunglow%2C%20Behind%20Electrotherm%2C%20Lane%2C%20Palodia%2C%20Gujarat%20382115&t=m&z=13&output=embed&iwloc=near" title="Atma Vikas"></iframe>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-gray-600 text-[16px] leading-[1.6]">Food Court by Himmatnagar Municipality, Near Namaste Circle, Mahaveer Nagar, Himmatnagar</p>
              <iframe loading="lazy" className="w-full h-[250px] border-0 rounded" src="https://maps.google.com/maps?q=Mahavirnagar%20Circle%2C%20Himatnagar%2C%20Gujarat%20383001&t=m&z=13&output=embed&iwloc=near" title="Food Court Himmatnagar"></iframe>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-gray-600 text-[16px] leading-[1.6]">Vakal Kelavani Mandal,<br/>Opposite Vadodara Stock Exchange,<br/>Sayajiganj, Vadodara</p>
              <iframe loading="lazy" className="w-full h-[250px] border-0 rounded" src="https://maps.google.com/maps?q=854P%2BX7W%2C%20Opposite%20Vadodara%20Stock%20Exchange%2C%20Sarod%2C%20Sayajiganj%2C%20Vadodara%2C%20Gujarat%20390007&t=m&z=13&output=embed&iwloc=near" title="Vakal Kelavani"></iframe>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-gray-600 text-[16px] leading-[1.6]">SRISTI Campus,<br/>AES Boys Hostel Campus, Beside AES Sports Ground, Near Gujarat University, Ahmedabad</p>
              <iframe loading="lazy" className="w-full h-[250px] border-0 rounded" src="https://maps.google.com/maps?q=AES%20Boys%20Hostel%20Campus%2C%20Navrangapura%2C%20near%20Gujarat%20University%20Library%20%26%20SBI%20Bank%2C%20Ahmedabad%2C%20Gujarat%20380009&t=m&z=13&output=embed&iwloc=near" title="SRISTI Campus"></iframe>
            </div>
          </div>
        </div>

        {/* Our Working System */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Working System</h3>
          <div className="space-y-4 text-gray-600 text-[16px] leading-[1.8] text-center max-w-4xl mx-auto">
            <p>The farmers participating in the SRISTI Prakrutik Khedut Haat are selected only after physical verification of their farms, ensuring they practice natural, organic, or bio-farming methods according to the prescribed standards.</p>
            <p>Only those farmers — or rural groups formed by them — who have been practicing completely natural and chemical-free farming for the past three years are allowed to sell their produce at the haat.</p>
            <p className="italic">Priority is given to rural farmers or their certified groups who are personally involved in farming and whose primary livelihood depends on natural farming.</p>
          </div>
        </div>

        {/* Role of SRISTI Innovations */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Role of SRISTI Innovations</h3>
          <div className="text-gray-600 text-[16px] leading-[1.8] max-w-4xl mx-auto">
            <p className="mb-4 text-center">SRISTI Innovations organization continuously and systematically manages various aspects of the SRISTI Prakrutik Khedut Haat, including:</p>
            <ul className="list-disc pl-6 space-y-2 w-fit mx-auto">
              <li>Planning, coordination, and promotion of the haat</li>
              <li>Regular farm verification and validation</li>
              <li>Selection and training of farmers</li>
              <li>Continuous guidance for chemical-free farming methods</li>
              <li>Laboratory research on farmers’ issues</li>
              <li>Consumer awareness activities</li>
              <li>Customer care and feedback management</li>
            </ul>
          </div>
        </div>

        {/* Customer Feedback */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Customer Feedback</h3>
          <div className="text-gray-600 text-[16px] leading-[1.8] text-center">
            <p>Customer feedback is always welcome. Your valuable suggestions help make the management of SRISTI Prakrutik Khedut Haat more efficient and transparent.<br/>You can share your feedback here: <a href="https://wa.me/+919510386635" className="text-blue-600 hover:underline">https://wa.me/+919510386635</a></p>
          </div>
        </div>

        {/* Address of the Organizing Institution */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Address of the Organizing Institution</h3>
          <div className="text-gray-600 text-[16px] leading-[1.8] text-center">
            <p><strong>SRISTI</strong><br/>
            Inside AES Boys Hostel Campus,<br/>
            Opposite Arpan Baby Care Hospital, next to Sports Complex,<br/>
            Near Gujarat University, Ahmedabad – 380009<br/>
            Phone: (0) 079 27913293<br/>
            Mobile: +91 9510386635 / +91 9825061139<br/>
            Email: info@sristi.org</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default KhedutHaatDetails;
