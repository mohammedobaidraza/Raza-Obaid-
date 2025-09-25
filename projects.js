/** Product-style project browser **/

const PROJECTS = [
  // --- AI/ML & Security (existing) ---
  {
    title: "RAG Pipeline for Enterprises",
    summary: "Retrieval-Augmented Generation using LangChain, FAISS, and Azure ML for grounded answers over domain corpora.",
    tech: ["Python","LangChain","FAISS","Azure"],
    category: "AI/ML",
    type: "app",
    links: { github: "", demo: "" }
  },
  {
    title: "IDS Optimization & Threat Detection",
    summary: "Ruleset tuning and packet triage that reduced false positives ~30% while improving recall.",
    tech: ["Snort","Wireshark","pandas"],
    category: "Security",
    type: "security",
    links: { github: "", demo: "" }
  },
  {
    title: "AI Visual Chatbot",
    summary: "Multimodal chatbot combining text and image generation via OpenAI APIs with Flask/React.",
    tech: ["Flask","React","OpenAI"],
    category: "AI/ML",
    type: "app",
    links: { github: "", demo: "" }
  },
  {
    title: "SIEM Architecture Deck",
    summary: "Reference architecture for log pipelines, detections, and response workflows used in design reviews.",
    tech: ["ELK","Sigma","Sysmon"],
    category: "Security",
    type: "research",
    links: { github: "", demo: "" }
  },
  {
    title: "YOLOv5 Object Detection",
    summary: "Custom dataset training and real-time inference demo.",
    tech: ["PyTorch","YOLOv5","OpenCV"],
    category: "AI/ML",
    type: "app",
    links: { github: "", demo: "" }
  },
  {
    title: "ETL & Sentiment on Amazon Reviews",
    summary: "Pipelines and model benchmarking (BERT, ALBERT, RoBERTa) on the Fine Foods dataset.",
    tech: ["Python","TensorFlow","pandas"],
    category: "Data",
    type: "data",
    links: { github: "", demo: "" }
  },

  // --- Live sites ---
  {
    title: "Structure Golf Academy",
    summary: "Stripe-enabled coaching site with bookings, pricing tiers, and gallery.",
    tech: ["Next.js","Stripe","Bootstrap"],
    category: "Web",
    type: "app",
    links: {
      github: "https://github.com/mohammedobaidraza/Structure-Golf-Academy-website",
      demo: "https://mohammedobaidraza.github.io/Structure-Golf-Academy-website/"
    }
  },
  {
    title: "T1751 – Incubator Website",
    summary: "Founder-style incubator website with interactive hero and application paths.",
    tech: ["HTML","CSS","JavaScript","Three.js"],
    category: "Web",
    type: "app",
    links: {
      github: "https://github.com/mohammedobaidraza/T1751-website",
      demo: "https://mohammedobaidraza.github.io/T1751-website/"
    }
  },
  {
    title: "TinDog – Landing Page",
    summary: "Playful, responsive landing page (Tinder for dogs) built with Bootstrap.",
    tech: ["HTML","CSS","Bootstrap","JavaScript"],
    category: "Web",
    type: "app",
    links: {
      github: "https://github.com/obaidraza111/tindog",
      demo: "https://obaidraza111.github.io/tindog/"
    }
  },
  {
    title: "Balloon Game",
    summary: "A lightweight vanilla JS game — simple mechanics, fast load, mobile-friendly.",
    tech: ["HTML","CSS","JavaScript","Canvas"],
    category: "Web",
    type: "game",
    links: {
      github: "https://github.com/mohammedobaidraza/Ballon-game",
      demo: "https://mohammedobaidraza.github.io/Ballon-game/"
    }
  },
  {
    title: "Portfolio (v1)",
    summary: "Personal portfolio site with sections for projects, skills, and contact.",
    tech: ["HTML","CSS","Bootstrap"],
    category: "Web",
    type: "app",
    links: {
      github: "https://github.com/mohammedobaidraza/portfolio",
      demo: "https://mohammedobaidraza.github.io/portfolio/"
    }
  },
  {
    title: "Weather API App",
    summary: "Client-side weather app fetching live data; clean UI and quick search.",
    tech: ["JavaScript","HTML","CSS","Fetch API"],
    category: "Web",
    type: "app",
    links: {
      github: "https://github.com/mohammedobaidraza/WeatherAPI",
      demo: "https://mohammedobaidraza.github.io/WeatherAPI/"
    }
  },
  {
    title: "Chef Hyderabadi",
    summary: "Restaurant-style site with menu sections, images, and API integration patterns.",
    tech: ["HTML","CSS","Bootstrap","REST"],
    category: "Web",
    type: "app",
    links: {
      github: "https://github.com/mohammedobaidraza/Chef-hyderabadi",
      demo: "https://mohammedobaidraza.github.io/Chef-hyderabadi/"
    }
  },

  // --- Research + added repos/notebooks ---
  {
    title: "Secure RAG Research",
    summary: "Exploring retrieval safety, prompt injection defenses, and robust vector-store policies.",
    tech: ["LangChain","FAISS","Guardrails"],
    category: "AI/ML",
    type: "research",
    links: { github: "", demo: "" }
  },
  {
    title: "VGG – CNN from Scratch",
    summary: "VGG implementation and exploration notebook.",
    tech: ["Python","PyTorch","CNN"],
    category: "AI/ML",
    type: "research",
    links: {
      github: "https://github.com/mohammedobaidraza/vgg",
      demo: "https://github.com/mohammedobaidraza/vgg/blob/main/VGG.ipynb"
    }
  },
  {
    title: "BERT vs ALBERT – IMDB",
    summary: "Sentiment analysis comparison on IMDB movie reviews.",
    tech: ["Python","TensorFlow","Transformers"],
    category: "AI/ML",
    type: "research",
    links: {
      github: "https://github.com/mohammedobaidraza/Sentiment-Analysis-using-BERT-vs-ALBERT-On-IMDB-Movie-Review-Dataset",
      demo: "https://github.com/mohammedobaidraza/Sentiment-Analysis-using-BERT-vs-ALBERT-On-IMDB-Movie-Review-Dataset/blob/main/Sentiment_Analysis_using_BERT_%26_ALBERT_on_IMDB_movie_review_Dataset.ipynb"
    }
  },
  {
    title: "LSTM vs GRU on MNIST",
    summary: "Sequence models comparison; training dynamics and accuracy on MNIST.",
    tech: ["Python","Keras","RNN"],
    category: "AI/ML",
    type: "research",
    links: { github: "https://github.com/mohammedobaidraza/LSTM-vs-GRU-on-MNIST-dataset-", demo: "" }
  },
  {
    title: "YOLO/Object Detection",
    summary: "Object detection repo & experiments.",
    tech: ["PyTorch","YOLO","OpenCV"],
    category: "AI/ML",
    type: "app",
    links: { github: "https://github.com/mohammedobaidraza/Object-Detection", demo: "" }
  },
  {
    title: "MNIST MLP (TensorFlow)",
    summary: "MLP on MNIST with TF; training & evaluation in one notebook.",
    tech: ["Python","TensorFlow","MNIST"],
    category: "AI/ML",
    type: "research",
    links: {
      github: "https://github.com/mohammedobaidraza/MNIST-MLP-TensorFlow",
      demo: "https://github.com/mohammedobaidraza/MNIST-MLP-TensorFlow/blob/main/Untitled2.ipynb"
    }
  },
  {
    title: "Perceptron & Adaline",
    summary: "Understanding linear vs. non-linear classification with classic models.",
    tech: ["Python","NumPy","ML"],
    category: "AI/ML",
    type: "research",
    links: {
      github: "https://github.com/mohammedobaidraza/Perceptron-and-Adaline-Models-Understanding-Linear-and-Non-Linear-Classification",
      demo: "https://github.com/mohammedobaidraza/Perceptron-and-Adaline-Models-Understanding-Linear-and-Non-Linear-Classification/blob/main/python%20perceptron_adaline.ipynb.ipynb"
    }
  },
  {
    title: "Predictive Maintenance (Manufacturing)",
    summary: "Enhancing manufacturing efficiency via AI-driven predictive maintenance.",
    tech: ["Python","pandas","ML"],
    category: "AI/ML",
    type: "research",
    links: { github: "https://github.com/mohammedobaidraza/Enhancing-Manufacturing-Efficiency-through-AI--driven-Predictive-Maintenance", demo: "" }
  },

  // Data / Sentiment
  {
    title: "Consumer Review Sentiment (v1)",
    summary: "Unpacking consumer reviews using classical sentiment analysis.",
    tech: ["Python","NLP","pandas"],
    category: "Data",
    type: "research",
    links: {
      github: "https://github.com/mohammedobaidraza/SENTIMENTAL-ANAYLSIS",
      demo: "https://github.com/mohammedobaidraza/SENTIMENTAL-ANAYLSIS/blob/main/Unpacking_Consumer_Reviews_using_Sentiment_Analysis.ipynb"
    }
  },
  {
    title: "Consumer Review Sentiment (v2)",
    summary: "Refined pipeline for sentiment on consumer reviews.",
    tech: ["Python","NLP","pandas"],
    category: "Data",
    type: "research",
    links: {
      github: "https://github.com/mohammedobaidraza/Review-Sentiment-Analyzer",
      demo: "https://github.com/mohammedobaidraza/Review-Sentiment-Analyzer/blob/main/Unpacking_Consumer_Reviews_using_Sentiment_Analysis%20(1).ipynb"
    }
  },

  // Security / Logging
  {
    title: "Log Analysis Project",
    summary: "Parsing and analyzing logs for detection and insights.",
    tech: ["Python","Regex","ELK"],
    category: "Security",
    type: "research",
    links: { github: "https://github.com/mohammedobaidraza/Log-Analysis-Project", demo: "" }
  },
  {
    title: "DNS Query Packet Analysis",
    summary: "Deep dive into DNS traffic and packet-level inspection.",
    tech: ["Wireshark","PCAP","Networking"],
    category: "Security",
    type: "research",
    links: { github: "https://github.com/mohammedobaidraza/DNS-Query-Packet-Analysis", demo: "" }
  },

  // Algorithms / DS&A
  {
    title: "Binary Search Tree (BST)",
    summary: "Fundamental data structure implementation and operations.",
    tech: ["Python","DSA"],
    category: "Algorithms",
    type: "research",
    links: { github: "https://github.com/mohammedobaidraza/BST", demo: "" }
  },
  {
    title: "Topological Sorting (DAG)",
    summary: "Kahn’s algorithm / DFS approach for DAGs.",
    tech: ["Python","Graphs","Algorithms"],
    category: "Algorithms",
    type: "research",
    links: { github: "https://github.com/mohammedobaidraza/Topological-Sorting-in-a-Directed-Acyclic-Graph-DAG-", demo: "" }
  },
  {
    title: "Ford–Fulkerson (Max-Flow/Min-Cut)",
    summary: "Implementation and walkthrough of the max-flow algorithm.",
    tech: ["Python","Graphs","Algorithms"],
    category: "Algorithms",
    type: "research",
    links: {
      github: "https://github.com/mohammedobaidraza/Ford-Fulkerson-Algorithm-for-Max-Flow-and-Min-Cut",
      demo: "https://github.com/mohammedobaidraza/Ford-Fulkerson-Algorithm-for-Max-Flow-and-Min-Cut/blob/main/Ford-Fulkerson%20Algorithm%20for%20Max%20Flow%20and%20Min%20Cut.ipynb"
    }
  },
  {
    title: "String Alignment (DP)",
    summary: "Dynamic programming approach to string alignment.",
    tech: ["Python","DP","Algorithms"],
    category: "Algorithms",
    type: "research",
    links: {
      github: "https://github.com/mohammedobaidraza/String-Alignment-using-Dynamic-Programming",
      demo: "https://github.com/mohammedobaidraza/String-Alignment-using-Dynamic-Programming/blob/main/String_alignment.ipynb"
    }
  },
  {
    title: "Knapsack – UHaul Problem",
    summary: "Optimizing item selection using the knapsack formulation.",
    tech: ["Python","DP","Optimization"],
    category: "Algorithms",
    type: "research",
    links: {
      github: "https://github.com/mohammedobaidraza/UHaul-Problem",
      demo: "https://github.com/mohammedobaidraza/UHaul-Problem/blob/main/Solution_of_Knapsack_problem.ipynb"
    }
  },

  // Web / Android / Misc
  {
    title: "LEEN – Loyola Education Engagement Network",
    summary: "Platform for Loyola students to enhance academic & campus experience.",
    tech: ["Laravel","MySQL","Bootstrap"],
    category: "Web",
    type: "app",
    links: { github: "https://github.com/mohammedobaidraza/Leen", demo: "" }
  },
  {
    title: "Android Stopwatch",
    summary: "Simple Java stopwatch app for Android (course project).",
    tech: ["Java","Android"],
    category: "Android",
    type: "app",
    links: {
      github: "https://github.com/mohammedobaidraza/simple-Java-stopwatch-to-an-Android-application/tree/main/comp413assignmentsandprojects-cs313413f23groupn6p4-e1fe46a3ee97",
      demo: ""
    }
  },
  {
    title: "SQL — Chinook Queries",
    summary: "Query exercises on the Chinook sample database.",
    tech: ["SQL","SQLite"],
    category: "Data",
    type: "research",
    links: { github: "https://github.com/mohammedobaidraza/SQL-Queries-on-Chinook-Database", demo: "" }
  },
  {
    title: "Blockchain Certificate Verification",
    summary: "Issue and validate certificates with on-chain proofs.",
    tech: ["Solidity","Web3","Next.js"],
    category: "Web",
    type: "app",
    links: { github: "https://github.com/mohammedobaidraza/BlockChain-Based-Certificate-verfication-and-validation", demo: "" }
  },
  {
    title: "AMS-CLS",
    summary: "Assets/docs for AMS-CLS.",
    tech: ["Docs","Scripts"],
    category: "Web",
    type: "research",
    links: { github: "https://github.com/mohammedobaidraza/AMS-CLS", demo: "" }
  },
  {
    title: "Application Management",
    summary: "Reference code and assets for app lifecycle management.",
    tech: ["Docs","Scripts"],
    category: "Web",
    type: "research",
    links: { github: "https://github.com/mohammedobaidraza/application-management", demo: "" }
  },
  {
    title: "Comp-413 Java Assignments",
    summary: "Assorted Java algorithms & assignments.",
    tech: ["Java","Algorithms"],
    category: "Algorithms",
    type: "research",
    links: { github: "https://github.com/mohammedobaidraza/Comp-413-Assignment-Java-", demo: "" }
  }
];

/* Categories (include Algorithms & Android) */
const CATEGORIES = ["All","AI/ML","Security","Web","Data","Algorithms","Android"];

// ---- UI wiring ----
const projectsGrid = document.getElementById('projectsGrid');
const searchInput = document.getElementById('searchInput');
const chipsWrap = document.getElementById('categoryChips');

let activeCategory = "All";
CATEGORIES.forEach(cat => {
  const chip = document.createElement('button');
  chip.className = 'chip' + (cat === activeCategory ? ' active' : '');
  chip.textContent = cat;
  chip.dataset.cat = cat;
  chip.addEventListener('click', () => {
    activeCategory = cat;
    [...chipsWrap.children].forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    render();
  });
  chipsWrap.appendChild(chip);
});

function getCheckedTypes(){
  return [...document.querySelectorAll('.type-filter:checked')].map(i => i.value);
}
function matches(project, query){
  if(!query) return true;
  const hay = (project.title + ' ' + project.summary + ' ' + project.category + ' ' + project.tech.join(' ')).toLowerCase();
  return hay.includes(query.toLowerCase());
}

function render(){
  const q = searchInput.value.trim();
  const allowedTypes = getCheckedTypes();
  projectsGrid.innerHTML = '';
  PROJECTS
    .filter(p => (activeCategory === 'All' || p.category === activeCategory))
    .filter(p => allowedTypes.includes(p.type))
    .filter(p => matches(p, q))
    .forEach(p => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
        <div class="tags">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
        <div class="foot">
          <span class="muted">${p.category} • ${p.type}</span>
          <span class="actions">
            ${p.links.demo ? `<a class="btn-demo" href="${p.links.demo}" target="_blank" rel="noreferrer">Demo</a>` : ''}
            ${p.links.github ? `<a class="btn-code" href="${p.links.github}" target="_blank" rel="noreferrer">Code</a>` : ''}
          </span>
        </div>
      `;
      projectsGrid.appendChild(card);
    });
}

searchInput.addEventListener('input', render);
document.querySelectorAll('.type-filter').forEach(cb => cb.addEventListener('change', render));
render();
