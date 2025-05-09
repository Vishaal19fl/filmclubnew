const teamData = [
    { domain: 'President', name: 'Vishaal Krishna', department: 'AIML', year: 3, rollNo: '221501174' },
    { domain: 'Vice President', name: 'Vikram', department: 'ECE', year: 3, rollNo: '220801235' },
    { domain: 'Operations Manager', name: 'Rakhul Prakash', department: 'CSE', year: 3, rollNo: '220701216' },
    { domain: 'Secretary', name: 'Shakithiyan', department: 'AIML', year: 3, rollNo: '221501128' },
    { domain: 'Treasurer', name: 'Sakthisree', department: 'CSBS', year: 3, rollNo: '221401080' },
    { domain: 'Mentor', name: 'Swayam Prakash Annamalai', department: 'CSD', year: 4, rollNo: '211701056' },
    { domain: 'Post Production Lead', name: 'Adhithya B', department: 'R&A', year: 3, rollNo: '221601004' },
    { domain: 'Post Production Lead', name: 'Pragatheesh I', department: 'AIML', year: 3, rollNo: '221501097' },
    { domain: 'Video Editor', name: 'Rahul S', department: 'CSD', year: 3, rollNo: '221701044' },
    { domain: 'Video Editor', name: 'Ragul M', department: 'CSD', year: 2, rollNo: '231701043' },
    { domain: 'Video Editor', name: 'Benin', department: 'AIML', year: 2, rollNo: '231501030' },
    { domain: 'VFX Lead', name: 'Surya Prakash G', department: 'AIML', year: 3, rollNo: '221501151' },
    { domain: 'VFX Lead', name: 'Sharvesh A R', department: 'AIML', year: 3, rollNo: '221501131' },
    { domain: 'Design Lead', name: 'Harshitha', department: 'CSBS', year: 3, rollNo: '221401029' },
    { domain: 'Design Lead', name: 'Bibin Graceson', department: 'IT', year: 3, rollNo: '221001034' },
    { domain: 'Designer', name: 'Kovendhan', department: 'ECE', year: 2, rollNo: '230801092' },
    { domain: 'Designer', name: 'Atheina Rachel', department: 'CSE', year: 2, rollNo: '230701046' },
    { domain: 'Color Grading Lead', name: 'Parthasarathy', department: 'AIML', year: 3, rollNo: '221501093' },
    { domain: 'Direction Lead', name: 'Lokesh G', department: 'AIML', year: 3, rollNo: '221501066' },
    { domain: 'Direction Lead', name: 'Aathithya', department: 'CSE', year: 3, rollNo: '220701501' },
    { domain: 'Direction Lead', name: 'Monish Raja Rathinam M', department: 'AI&DS', year: 3, rollNo: '221801033' },
    { domain: 'Direction Associate', name: 'Shivani B', department: 'BT', year: 2, rollNo: '230401146' },
    { domain: 'Direction Associate', name: 'Vicram', department: 'CSBS', year: 2, rollNo: '231401123' },
    { domain: 'Direction Associate', name: 'Thandeeshwaran', department: 'ECE', year: null, rollNo: '230801223' },
    { domain: 'Writing Lead', name: 'Harish', department: 'AIML', year: 3, rollNo: '221501039' },
    { domain: 'Writing Lead', name: 'Livesh', department: 'AIML', year: 3, rollNo: '221501065' },
    { domain: 'Writing Associate', name: 'Saswat Vishal', department: 'CSD', year: 2, rollNo: '231701050' },
    { domain: 'Writing Associate', name: 'Dilip Kannan', department: 'AIML', year: 2, rollNo: '231501040' },
    { domain: 'Writing Associate', name: 'Arjun Ganesh', department: 'ECE', year: 2, rollNo: '230801021' },
    { domain: 'Story Boarding', name: 'Karthika Nagaraj', department: 'AIML', year: 3, rollNo: '221501057' },
    { domain: 'Music Lead', name: 'Keerthana', department: 'AIML', year: 3, rollNo: '221501060' },
    { domain: 'Music Lead', name: 'Prajein C K', department: 'AIML', year: 3, rollNo: '221501189' },
    { domain: 'Music Producer', name: 'Anish Karthik', department: 'ECE', year: 2, rollNo: '230801016' },
    { domain: 'Music Producer', name: 'Kiren V Nair', department: 'EEE', year: 3, rollNo: '220901042' },
    { domain: 'Vocals Team', name: 'Jayaprakash', department: 'CSE', year: 2, rollNo: '230701129' },
    { domain: 'Vocals Team', name: 'Iniya', department: 'CSBS', year: 2, rollNo: '231401038' },
    { domain: 'Vocals Team', name: 'Vishal D', department: 'EEE', year: 3, rollNo: '220901117' },
    { domain: 'Cinematography Lead', name: 'Ram Prasath', department: 'Mechanical', year: 3, rollNo: '221101079' },
    { domain: 'Cinematography Lead', name: 'Nandha Kumar', department: 'CSE', year: 3, rollNo: '220701180' },
    { domain: 'Cinematography Lead', name: 'Prasanth', department: 'R&A', year: 3, rollNo: '221601030' },
    { domain: 'Associate Cinematographer', name: 'E Akash', department: 'CSD', year: 2, rollNo: '231701003' },
    { domain: 'Associate Cinematographer', name: 'Manoj Kumar', department: 'CSD', year: 2, rollNo: '220701524' },
    { domain: 'Acting Lead', name: 'Harishvar K', department: 'AIML', year: 3, rollNo: '221501040' },
    { domain: 'Acting Lead', name: 'Jegadees V', department: 'ECE', year: 3, rollNo: '220801093' },
    { domain: 'Associates Actors', name: 'Abinauv R', department: 'CSD', year: 3, rollNo: '221701003' },
    { domain: 'Associates Actors', name: 'Nithu B', department: 'BT', year: 2, rollNo: '230401110' },
    { domain: 'Poetry Lead', name: 'Joel Sam', department: 'AI&DS', year: 3, rollNo: '221801021' },
    { domain: 'Poetry Lead', name: 'Solainarayanan K S', department: 'CSD', year: 3, rollNo: '221701057' },
    { domain: 'Poetry Associate', name: 'Vishnupriya', department: 'AIML', year: 2, rollNo: '231501185' },
    { domain: 'Critic Lead', name: 'Abhijit', department: 'AI&DS', year: 3, rollNo: '221801001' },
    { domain: 'Critic Lead', name: 'Monish', department: 'CSD', year: 3, rollNo: '221701038' },
    { domain: 'Critic Associate', name: 'Lochana', department: 'EEE', year: 3, rollNo: '220901046' },
    { domain: 'Critic Associate', name: 'Aishwarya', department: 'CSE', year: 2, rollNo: '230701016' },
    { domain: 'PR Lead', name: 'Jai Saarathi R', department: 'AI&DS', year: 3, rollNo: '221801019' },
    { domain: 'PR Associate', name: 'Devesh', department: 'AIML', year: 2, rollNo: '231501034'},
    { domain: 'PR Associate', name: 'Sriwanth Sathish', department: 'CSE', year: 2, rollNo: '230701344'},
    { domain: 'Event Management Lead', name: 'Arunachalam Thiyagarajan', department: 'AIML', year: 3, rollNo: '221501012'},
    { domain: 'Event Management Lead', name: 'Ajay Krishnan', department: 'CSE', year: 3, rollNo: '220701018'},
    { domain: 'Event Management Associate', name: 'Priyadarshini', department: 'BioTech', year: 2, rollNo: '230401125'},
    { domain: 'Event Management Associate', name: 'Koustupan', department: 'CSBS', year: 2, rollNo: '231401055'},
    { domain: 'Event Management Associate', name: 'Amirtha Raja Rajeshwar', department: 'AIML', year: 2, rollNo: '231501012'},
  ]
    
  