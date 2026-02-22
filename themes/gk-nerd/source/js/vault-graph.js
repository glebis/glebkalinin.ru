// Vault 4D Graph - hero visual from Obsidian vault
// 452 nodes, 1314 edges - filtered from real vault data
(function() {
'use strict';

const VAULT_GRAPH = {"c":["idea","ai","wellbeing","design","person","tool","book","place"],"n":[["Serendipity",0],["AI Agents",1],["Mindset",0],["Novelty seeking",0],["Personal OS",0],["Voice Claude",1],["The System",0],["Meditation",2],["Mindfulness",2],["Creativity",0],["Software 3.0",0],["Claude code",1],["Knowledge Management",0],["Quantified self",0],["Design Thinking",3],["Psychology",2],["Consciousness",2],["Flow",0],["Randomness",0],["@Sergey Kadomsky",4],["Words I love",0],["∞→Diversify people I talk to",0],["PSYC 110. Introduction to Psychology",2],["Exploratory behaviour",0],["Flaneur",0],["AI Creativity",1],["My AI agents and automation",1],["MCP",5],["+Building effective agents",1],["AI Video tools",1],["AI Translation",1],["AI Pair Programming",1],["Artificial Intelligence",0],["AI Business models",1],["Mixture of Agents",1],["Course - Claude Code Lab for Products",1],["Agents UX",1],["Bot UX",3],["Gemini Deep Research",0],["Agents Benchmarking",1],["AI Agents Payments",1],["AI agents for Instagram",1],["AI chat bots",1],["AI Courses",1],["AI Tools for marketing",1],["Large Language Models",1],["Teaching AI Agents to Non-Technical Users - Comprehensive Ideas List",1],["Replit agent",1],["RAG",0],["Cline",0],["OpenAI Operator",1],["AI Art coachings agent",1],["GPT Researcher",1],["+AI agents -- what they are, how they work, and use cases",1],["AI and creativity",1],["Agent Engineering",1],["AI software development agents",1],["Agents",1],["Documentation for AI agents",1],["Active inference",0],["AI automation",1],["Windsurf",0],["AI is more creative than humans",1],["AI Researcher Agents",1],["Ethical Adaptive Triggers Framework",0],["Openinterpreter",0],["Agentic Coding",1],["@Dr. Alia Crum",4],["Body Mass Index (BMI)",0],["Placebo",0],["Personality trait",0],["Learning",0],["+The modern world hijacks your attention. Here’s how to take it back. Amishi Jha",0],["@Amishi Jha",4],["Ed Diener. Serious Research on Happiness",0],["personal knowledge management",0],["Obsidian",5],["Apple Health Data",0],["Avoid over-scaffolding",0],["Lifelogging",0],["Memex",0],["life management",0],["Citizen science",0],["Mac Mini",0],["Omi",0],["Bee",0],["Personal AI",0],["Plaud Note Pin",0],["Vibe coding",0],["Mirai",0],["Friend Wearable AI",0],["MoC - Knowledge Systems",0],["Apple Watch",0],["Local AI Inference",1],["Limitless Pendant",0],["Agent Skills",1],["The System - Telegram Agent",1],["Smart Turn",0],["Wake Word",0],["Self-concordance",0],["Claude Agent SDK",1],["Livekit",0],["People First Funds",0],["Voice agent frontend comparison",1],["system continuity",0],["Drift feedback",0],["Error detection",0],["Solopreneurship",0],["Failure recovery",0],["The System - Integration Architecture",0],["Mindfulness and HRV",2],["Mindfulness and Health",2],["@Jack Kornfield",4],["Meditation and the Brain",2],["@Michael Taft",4],["Meditation teachers",2],["Mindfulness and pain",2],["Mindful Productivity",2],["Mindfulness coaching",2],["Mindfulness Based Cognitive Therapy (MBCT)",2],["Mindfulness questionnaire",2],["@Shinzen Young",4],["Buddhism",0],["Books on Meditation recommended by Michael Taft",6],["Open monitoring",0],["Shamata",0],["@Tara Brach",4],["Mindfulness for Creativity",2],["@Thich Nhat Hanh",4],["Zen",0],["Curiosity",0],["@John Vervaeke",4],["@John Kabat-Zinn",4],["@Fedor Taranenko",4],["@Vincent Horn",4],["five goals or applications of mindfulness",2],["Compassion focused therapy",2],["Definition of Mindfulness",2],["@Dalai Lama",4],["@Victor Shiryaev",4],["Mindfulness and emotions",2],["Integration",0],["Compassion",0],["Acceptance and commitment therapy (ACT)",2],["Introspection",0],["Psychotherapy",2],["@Christopher Germer",4],["@David Lynch",4],["Living a creative lifestyle",0],["Creative Visualization",0],["Create connections",0],["@Andrej Karpathy",4],["Amp",0],["RIPER Workflow",0],["Claude Code Business",1],["llm-cli",1],["Autumn 2025 Overview",0],["Integral Life Overview - October 2025",0],["AGENCY Lab - Claude Project Instructions",1],["Codex",0],["Understanding Claude Code",1],["AI Coding Agents",1],["2025 Knowledge Ecosystem Map",0],["Serendipity Recommendation Principles",0],["Context Management",0],["Command Line",0],["Continual_Learning_in_Claude_Code",1],["Claude Code Tools",1],["ai-sdk-v5-crash-course",5],["Claude skills",1],["My Focus",0],["claude code post 01",1],["OpenRouter",0],["opencode",0],["Factory AI",0],["Lab Launch Checklist",0],["Claude code how to use",1],["writing on claude code",1],["AI Security",1],["Active Externalism",0],["@Niklas Luhmann",4],["Linking your thinking",0],["Execution",0],["Note-making vs note-taking",0],["Idea generation",0],["Task Management",0],["Trusted systems",0],["Community Knowledge Management",0],["Build a trusted system",0],["@Andy Matuschak",4],["@Nick Milo",4],["Daily note",0],["Getting Things Done",0],["Map of content",0],["Zettelkasten",0],["Signal vs noise",0],["Mind3 community",0],["∞→ Your brain is for having ideas, not for storings them",0],["Maps making",0],["Вечнозеленые заметки должны быть интенсивно перелинкованы",0],["Knowledge Graphs",0],["Evergreen notes",0],["Obsidian alternatives",5],["Knowledge",0],["Вечнозеленые заметки должны быть атомарны",0],["procrastination",0],["Heart Rate Variability",0],["MoC - Health",0],["Local AI",0],["Doing science on your life",0],["Self-monitoring",0],["Self-regulation",0],["Life Mapping Tools",5],["Mood monitoring",0],["@Kevin Kelly",4],["Input Sources for AI System",1],["Proactive Health Management",0],["∞→Disease is shrinkage of capacity for adaptive variation",0],["Journaling",0],["Data lake",0],["AlterEgo",0],["∞→Wide dynamic range is healthy",0],["Wellbeing",0],["Ultrahuman",0],["Oura Ring",0],["Quantified relationships",0],["rumination",0],["+Why we self sabotage the recovery process. Learn how to refuel your brain and body the natural way.",0],["Personal Health Intelligence",0],["Reflective practice",0],["Quantified self course",0],["Behavioral activation monitoring",0],["Sleep tracking",0],["Collect → reflect",0],["Deciding What To Observe",0],["Human-centered design",3],["Problem solving",0],["Shared problem space",0],["Design your life",3],["Innovation",0],["Intelligence",0],["Detection of consciousness",2],["AI Consciousness",2],["Emergentism",0],["@Sam Harris",4],["Spectrum of consciousness",2],["+Your brain hallucinates your conscious reality",0],["Integrated Information Theory",0],["@Francis Crick",4],["Integrative information theory of Consciousness",2],["@Giulio Tononi",4],["Pure consciousness event",2],["Unconscious Bias",0],["Plant consciousness",2],["Focus",0],["Example Motivators",0],["Window of tolerance",0],["@Mihaly Csikszentmihalyi",4],["Deep work",0],["Feel flow",0],["Cognitive performance",0],["Mental states",0],["Hyperfocus",0],["Dynamic Difficulty Adjustment",0],["Feedback is crucial for learning",0],["The Scale of subjective states",0],["Entropy",0],["Brain",0],["Synchronicity",0],["Touch",0],["Zeigarnik effect",0],["Diversity",0],["Acceptance",0],["Autonomy",0],["Intention",0],["Commitment",0],["Writing",6],["Xenohormesis",0],["Deliberation",0],["@Alan W. Watts",4],["Agency (book)",6],["Polymaths",0],["Vulnerability",0],["Feedback loop",0],["Sex",0],["Awe",0],["Generalist",0],["Love",0],["Singularity",0],["@Gleb Kalinin",4],["Unpredictibility",0],["Emergence",0],["Synergy",0],["Experiment",0],["T-Shaped Person",0],["Not-knowing",0],["Human in focus",0],["Redundancy",0],["Awareness",0],["Long-term",0],["∞→Conversation is primary medium for developing ideas",0],["Relocation to Berlin",7],["How I use Obsidian for networking",5],["@Sigmund Freud",4],["Operant Conditioning",0],["@B. F. Skinner",4],["Unconscious",0],["@Paul Bloom",4],["@Ivan Pavlov",4],["Little Albert experiment",0],["Parental investment",0],["Koinophilia",0],["average faces",0],["Extinction (behaviour)",0],["Habituation",0],["Organism-environment system",0],["Multipotential",0],["Community",0],["Consulting Agreement",0],["Obsidian as a self-discovery tool",5],["@Anton Simanenko",4],["Building Skills for Claude",1],["n8n",0],["Agentic Knowledge Management",1],["2025 systems",0],["Attention",0],["Salience cannot be computed",0],["Prompt engineering",0],["Salience",0],["Claude",1],["LSP",0],["@Tim Berners-Lee",4],["@Richard Feynman",4],["Antidisciplinarity",0],["Interdisciplinary Research",0],["@Salman Khan",4],["Collective Intelligence",0],["@Peter Senge",4],["Language Models",1],["Reasoning",0],["Notion",0],["ChatGPT",1],["Research on AI",0],["Robots",0],["Dangers of AI",0],["Machine learning",1],["Alignment problem",0],["AI Explained",1],["Oppurtunities in AI",0],["Business Models",1],["Business Model Canvas",1],["Personal Assistant",0],["Telegram",0],["Chat Bots",0],["General agent",1],["MoC - AI & Agents",1],["Obsidian + AI principles and approaches",1],["Obsidain AI",0],["Deliberate practice",0],["AI Therapy Analysis",2],["Think&Link 3",0],["OSWorld",0],["@Alexander Povaliaev",4],["AI Psychotherapy",2],["LangChain. Chat with Your Data",0],["@Harrison Chase",4],["Skin-Covered Bastards (chat)",0],["Generative AI for Everyone",1],["@Sam Altman",4],["+RouteLLM achieves 90- GPT4o Quality AND 80- CHEAPER - YouTube",1],["VibeBerlin Telegram bot",7],["AI for research papers",1],["Prompt Caching",0],["GraphRAG",0],["embeddings",0],["Contextual Retrieval",0],["Citations in Anthropic API",5],["My AI Project Ideas",1],["Tavily",0],["OpenAI Deep Research",1],["Agentic Behavior and Design Notes",1],["Subagents",1],["Devin",0],["Automation",0],["Zed AI",0],["Cursorisation",0],["Source of info on AI",0],["SWE-Agent",1],["GitHub Copilot",0],["Aider",0],["GSD Framework",0],["Lovable.dev",0],["My Obsidian plugins",5],["Pythogora",0],["OpenDevin",0],["Cursor.ai",0],["Claude.md",1],["Documentation",0],["Behaviour",0],["Reinforcement learning",0],["Decision-making",0],["@Karl Friston",4],["Predictive processing",0],["Waste in Lean Manufacturing",0],["Eliminate. Simplify. Automate. Delegate.",0],["Text-To-Speech",0],["Speech to text",0],["Hallucinations as intelligence feature",0],["+Claude 3.5 Sonnet for agentic coding - YouTube",1],["Emergent abilities in language models",1],["Error-correction",0],["Collective Decision making",0],["@Andrew Huberman",4],["C-Reactive Protein",0],["Extraversion",0],["Openness",0],["HEXACO",0],["Neuroticism",0],["Alexithymia",0],["The Big Five Personality model",1],["Conscientiousness",0],["Agreeableness",0],["Testing effect",0],["Studying in Obsidian",5],["Meta-skills",0],["@Igor Ivanov",4],["Dopamine",0],["Learning curve",0],["Spaced Repetition",0],["Generation effect",0],["Implicit learning",0],["Metacognition",0],["Ambivalence",0],["Attunement",0],["Being",0],["Becoming",0],["Coherence",0],["Collaboration",0],["Connection",0],["Confusion",0],["Difference",0],["Externalization",0],["Inquiry",0],["Mirror",0],["Paradox",0],["Presence",0],["Resonance",0],["Surrender",0],["Variety",0],["Wicked Problem",0],["Witness",0]],"e":[[0,18],[0,19],[0,20],[0,21],[0,22],[0,23],[0,24],[1,25],[1,26],[1,27],[1,28],[1,29],[1,9],[1,30],[1,31],[1,32],[1,33],[1,34],[1,35],[1,36],[1,37],[1,38],[1,39],[1,40],[1,41],[1,42],[1,43],[1,44],[1,45],[1,46],[1,47],[1,48],[1,49],[1,50],[1,51],[1,52],[1,11],[1,53],[1,54],[1,55],[1,56],[1,57],[1,58],[1,59],[1,60],[1,61],[1,62],[1,63],[1,64],[1,65],[1,66],[2,67],[2,68],[2,69],[3,70],[3,71],[3,72],[3,73],[3,23],[3,74],[4,75],[4,10],[4,76],[4,77],[4,78],[4,79],[4,80],[4,81],[4,6],[4,82],[4,83],[4,13],[4,84],[4,85],[4,86],[4,87],[4,88],[4,11],[4,89],[4,90],[4,91],[4,92],[4,5],[4,93],[4,94],[4,95],[5,96],[5,10],[5,97],[5,98],[5,99],[5,6],[5,100],[5,101],[5,83],[5,102],[5,88],[5,95],[5,103],[6,96],[6,10],[6,104],[6,76],[6,77],[6,83],[6,105],[6,106],[6,107],[6,108],[6,11],[6,109],[7,110],[7,111],[7,112],[7,113],[7,114],[7,8],[7,115],[7,116],[7,117],[7,118],[7,119],[7,120],[7,121],[7,122],[7,123],[7,124],[7,125],[7,126],[7,127],[7,128],[7,129],[8,130],[8,131],[8,132],[8,110],[8,111],[8,112],[8,133],[8,113],[8,114],[8,134],[8,135],[8,136],[8,115],[8,118],[8,117],[8,137],[8,119],[8,138],[8,139],[8,140],[8,120],[8,121],[8,122],[8,141],[8,123],[8,124],[8,142],[8,126],[8,127],[8,143],[8,144],[8,145],[8,146],[9,54],[9,127],[9,147],[9,148],[9,149],[9,150],[9,9],[10,151],[10,100],[10,88],[11,152],[11,153],[11,154],[11,155],[11,156],[11,157],[11,158],[11,159],[11,35],[11,160],[11,161],[11,162],[11,163],[11,164],[11,165],[11,166],[11,167],[11,168],[11,169],[11,88],[11,170],[11,171],[11,57],[11,172],[11,173],[11,174],[11,175],[11,176],[11,177],[11,66],[11,178],[12,179],[12,180],[12,76],[12,181],[12,182],[12,183],[12,184],[12,185],[12,186],[12,187],[12,188],[12,189],[12,190],[12,191],[12,192],[12,193],[12,194],[12,195],[12,196],[12,197],[12,198],[12,199],[12,200],[12,201],[12,202],[12,203],[12,204],[12,205],[13,206],[13,207],[13,208],[13,209],[13,77],[13,210],[13,211],[13,212],[13,213],[13,79],[13,81],[13,214],[13,23],[13,13],[13,215],[13,216],[13,217],[13,218],[13,219],[13,220],[13,221],[13,222],[13,223],[13,224],[13,225],[13,226],[13,227],[13,228],[13,229],[13,230],[13,231],[13,232],[13,94],[13,233],[13,234],[14,235],[14,236],[14,237],[14,238],[14,239],[16,240],[16,241],[16,242],[16,243],[16,244],[16,245],[16,246],[16,16],[16,247],[16,248],[16,249],[16,250],[16,251],[16,252],[16,253],[17,254],[17,255],[17,256],[17,257],[17,258],[17,259],[17,260],[17,261],[17,262],[17,263],[17,264],[17,265],[18,266],[20,130],[20,267],[20,268],[20,179],[20,269],[20,270],[20,271],[20,272],[20,273],[20,274],[20,275],[8,20],[20,276],[20,277],[20,278],[20,279],[20,280],[20,281],[20,282],[20,283],[20,284],[20,285],[20,286],[20,287],[20,288],[20,289],[20,290],[20,291],[20,292],[20,293],[20,294],[20,295],[20,296],[20,297],[20,298],[20,299],[21,300],[21,301],[21,302],[22,303],[22,304],[22,305],[22,306],[22,307],[22,308],[22,284],[22,309],[22,310],[22,311],[22,312],[22,313],[22,71],[22,314],[23,315],[3,24],[24,319],[25,320],[26,27],[26,321],[26,322],[26,323],[26,324],[27,48],[27,49],[27,329],[27,321],[27,330],[27,28],[27,76],[28,321],[30,32],[30,45],[32,54],[32,338],[32,339],[32,60],[32,340],[32,341],[32,342],[32,343],[32,344],[32,345],[32,346],[32,347],[32,348],[33,349],[33,350],[35,164],[35,158],[36,46],[36,351],[36,55],[36,37],[36,64],[37,351],[37,352],[37,64],[37,353],[39,361],[42,362],[32,42],[42,338],[42,341],[42,363],[42,345],[43,364],[32,43],[43,365],[43,366],[43,367],[45,342],[45,368],[32,45],[45,329],[45,369],[43,46],[46,66],[47,370],[47,56],[48,371],[48,372],[48,373],[48,374],[48,375],[48,376],[11,48],[45,48],[49,66],[51,377],[52,378],[52,379],[38,52],[54,62],[55,56],[55,380],[55,95],[26,56],[56,381],[56,382],[56,383],[31,56],[56,384],[56,385],[56,386],[49,56],[56,387],[56,388],[56,389],[11,56],[56,390],[56,391],[56,392],[56,393],[56,61],[56,394],[56,65],[56,66],[56,395],[57,396],[58,397],[58,66],[59,398],[59,399],[59,400],[59,401],[59,402],[60,403],[60,404],[47,61],[61,88],[61,66],[61,395],[9,62],[63,379],[50,63],[38,63],[52,63],[64,351],[65,165],[65,405],[65,406],[45,65],[66,407],[66,382],[66,240],[66,408],[66,264],[66,278],[31,66],[66,339],[66,236],[66,409],[66,323],[66,410],[66,358],[66,387],[66,88],[66,389],[66,394],[66,411],[66,395],[67,412],[67,69],[68,413],[68,206],[70,414],[70,415],[70,416],[70,417],[70,418],[70,419],[70,420],[70,421],[71,422],[71,423],[71,424],[71,425],[71,426],[71,183],[71,427],[71,428],[71,429],[17,71],[71,430],[71,431],[72,325],[72,73],[8,72],[73,325],[8,73],[74,138],[74,287],[75,423],[12,75],[75,156],[75,76],[9,75],[75,278],[75,181],[75,183],[75,236],[75,186],[75,187],[75,427],[75,188],[75,323],[75,192],[75,428],[75,193],[75,358],[66,75],[75,194],[75,195],[75,429],[75,329],[75,199],[56,75],[71,75],[75,201],[75,203],[75,204],[76,276],[76,181],[76,183],[76,194],[77,206],[77,224],[6,78],[10,78],[11,78],[80,179],[80,91],[80,331],[80,194],[76,80],[75,81],[81,325],[77,81],[81,211],[81,99],[6,81],[81,192],[81,170],[5,81],[32,82],[13,82],[82,215],[79,84],[84,87],[5,84],[13,84],[84,94],[84,85],[79,85],[85,87],[13,85],[85,94],[79,87],[5,87],[13,87],[87,94],[88,151],[88,370],[88,159],[88,395],[76,89],[6,89],[89,93],[5,89],[83,89],[10,89],[77,89],[11,89],[85,90],[87,90],[90,94],[84,90],[75,91],[91,331],[76,91],[91,212],[91,254],[91,100],[91,186],[91,187],[91,357],[91,300],[91,193],[91,164],[91,195],[91,197],[91,170],[1,91],[91,200],[91,328],[91,201],[77,92],[10,93],[6,93],[83,93],[13,93],[11,93],[5,93],[95,355],[11,95],[10,96],[76,96],[77,96],[95,96],[96,100],[13,96],[4,96],[11,96],[96,97],[97,101],[97,98],[97,406],[99,325],[35,99],[99,107],[96,101],[102,107],[104,106],[104,105],[104,108],[4,105],[105,328],[105,106],[106,108],[5,107],[107,289],[105,108],[96,109],[4,109],[5,109],[10,109],[109,355],[104,109],[11,109],[112,126],[113,113],[113,129],[113,142],[114,121],[113,114],[114,123],[115,126],[112,115],[115,139],[115,134],[115,244],[115,146],[116,139],[116,121],[118,137],[111,119],[122,125],[122,129],[112,123],[127,149],[128,142],[128,129],[121,129],[124,129],[8,129],[117,129],[130,130],[131,139],[122,131],[121,135],[136,142],[130,137],[131,137],[137,211],[137,244],[7,137],[137,146],[122,138],[121,139],[7,139],[110,140],[16,141],[141,141],[133,143],[143,272],[139,143],[143,145],[151,341],[152,173],[152,174],[152,161],[66,152],[154,167],[152,154],[35,154],[27,154],[154,174],[154,161],[154,159],[66,154],[155,172],[76,156],[156,158],[156,187],[156,323],[156,411],[156,358],[66,156],[66,159],[159,323],[160,177],[160,176],[56,161],[49,161],[1,161],[161,382],[61,161],[161,173],[161,174],[161,330],[161,389],[159,161],[66,161],[161,395],[12,162],[156,162],[76,162],[162,264],[162,278],[162,181],[162,339],[162,236],[162,400],[162,373],[162,187],[162,323],[162,188],[48,162],[162,193],[162,410],[162,358],[66,162],[162,194],[162,195],[162,429],[162,389],[162,170],[1,162],[162,200],[56,162],[71,162],[162,201],[162,203],[162,411],[162,395],[163,341],[12,164],[165,173],[27,166],[166,169],[66,166],[167,354],[160,167],[167,355],[165,167],[167,330],[57,167],[5,167],[167,176],[167,177],[35,168],[169,329],[170,325],[96,170],[170,207],[35,170],[4,170],[5,170],[167,172],[45,172],[1,173],[49,173],[173,174],[173,389],[159,173],[173,395],[1,174],[66,174],[35,175],[158,175],[171,177],[55,178],[178,355],[76,179],[179,188],[179,192],[4,179],[179,194],[179,328],[179,315],[180,194],[181,193],[181,183],[181,195],[181,198],[181,189],[181,190],[182,188],[183,429],[183,199],[14,184],[185,192],[117,185],[186,191],[186,192],[179,186],[181,186],[182,186],[185,186],[186,197],[186,201],[186,188],[76,187],[187,187],[187,317],[187,196],[187,200],[188,202],[188,404],[76,188],[189,201],[76,189],[189,189],[4,191],[192,270],[192,197],[188,192],[193,195],[193,201],[193,198],[76,193],[190,193],[194,201],[195,325],[183,195],[195,201],[195,198],[196,362],[75,197],[197,270],[197,201],[48,200],[200,373],[180,201],[201,204],[199,201],[202,362],[181,202],[76,202],[179,203],[203,325],[203,240],[76,203],[32,203],[203,334],[1,203],[71,203],[206,206],[92,206],[206,217],[208,219],[209,218],[23,209],[210,213],[210,229],[210,261],[210,231],[210,218],[211,226],[212,302],[212,213],[4,212],[170,212],[212,218],[8,213],[215,216],[217,221],[218,229],[218,218],[218,276],[220,405],[221,325],[206,221],[221,333],[221,226],[223,228],[206,223],[221,223],[223,224],[224,232],[224,228],[206,224],[221,224],[216,224],[217,224],[226,226],[79,227],[215,228],[216,228],[229,358],[229,229],[227,230],[79,231],[230,233],[234,238],[236,240],[9,236],[236,400],[236,237],[17,236],[237,237],[237,333],[237,336],[237,334],[217,237],[238,400],[17,238],[238,238],[3,239],[240,407],[240,240],[240,242],[9,240],[240,402],[32,240],[14,240],[17,240],[240,431],[240,336],[240,253],[241,249],[241,251],[243,291],[246,249],[246,401],[247,250],[241,247],[249,250],[131,251],[252,307],[254,325],[170,254],[125,254],[211,256],[260,267],[260,325],[236,260],[260,261],[261,265],[262,325],[190,263],[264,300],[32,266],[270,325],[8,272],[74,273],[274,275],[143,275],[278,339],[278,400],[278,358],[218,278],[278,411],[279,315],[7,279],[281,286],[283,300],[284,307],[286,294],[287,426],[284,287],[280,289],[289,296],[290,344],[291,409],[189,300],[118,301],[304,305],[71,308],[305,308],[271,311],[311,312],[313,313],[309,313],[71,314],[8,314],[130,316],[221,316],[19,316],[71,316],[237,316],[294,316],[3,316],[316,333],[239,316],[316,334],[289,317],[76,319],[321,381],[58,321],[321,329],[60,322],[6,322],[100,322],[322,324],[48,323],[76,323],[323,395],[131,325],[8,325],[7,325],[32,327],[45,327],[325,328],[328,402],[170,329],[66,330],[4,331],[71,332],[333,334],[217,333],[239,334],[221,334],[141,334],[1,334],[334,336],[236,336],[336,400],[336,411],[202,340],[76,340],[1,343],[45,343],[344,346],[338,345],[33,348],[86,351],[341,352],[42,353],[151,354],[4,354],[1,354],[10,354],[5,354],[354,355],[11,354],[95,354],[10,355],[43,355],[344,355],[355,357],[1,355],[172,355],[55,355],[5,355],[98,355],[4,355],[53,355],[56,355],[28,355],[346,355],[355,363],[101,355],[48,355],[355,359],[341,357],[329,357],[76,357],[264,358],[283,358],[358,427],[358,428],[358,410],[17,358],[71,358],[341,359],[329,359],[360,362],[117,360],[1,361],[338,363],[353,363],[364,365],[364,374],[45,364],[320,366],[32,366],[45,371],[28,380],[1,380],[66,380],[377,381],[40,381],[381,390],[382,387],[382,394],[1,382],[383,404],[384,389],[384,388],[384,395],[385,391],[385,395],[320,386],[347,386],[387,394],[17,388],[388,388],[388,389],[382,389],[389,394],[389,395],[58,390],[47,393],[382,393],[329,394],[1,394],[391,395],[202,395],[76,395],[100,396],[169,396],[11,396],[71,399],[57,402],[403,404],[101,405],[405,406],[5,406],[242,407],[210,407],[402,407],[407,431],[32,407],[246,407],[7,407],[407,410],[407,430],[241,407],[9,407],[399,407],[106,407],[358,407],[16,407],[328,407],[325,407],[236,407],[45,407],[249,407],[71,407],[253,407],[45,409],[240,410],[264,410],[402,410],[410,426],[399,410],[400,410],[283,410],[45,410],[16,410],[410,430],[410,431],[59,410],[71,410],[297,410],[76,411],[400,411],[187,411],[410,411],[196,411],[200,411],[415,419],[414,416],[416,420],[416,421],[416,419],[8,417],[417,419],[414,419],[419,420],[419,421],[422,422],[423,428],[76,423],[304,426],[422,429],[16,431],[8,431],[276,431],[20,432],[20,433],[0,433],[20,434],[0,434],[20,435],[20,436],[20,437],[20,438],[20,439],[20,440],[20,441],[20,442],[20,443],[20,444],[20,445],[0,445],[20,446],[0,446],[20,447],[0,447],[20,448],[20,449],[20,450],[0,450]]};

// Orange-accent color palette matching site theme
const CAT_COLORS = {
  idea:      [1.00, 0.55, 0.25],  // warm orange
  ai:        [1.00, 0.42, 0.21],  // accent orange #ff6b35
  wellbeing: [0.85, 0.35, 0.50],  // muted rose
  design:    [1.00, 0.70, 0.35],  // amber
  person:    [0.70, 0.40, 0.25],  // burnt sienna
  tool:      [0.90, 0.60, 0.30],  // copper
  book:      [0.80, 0.50, 0.20],  // bronze
  place:     [0.60, 0.45, 0.30],  // earth tone
};

const container = document.getElementById('vault-graph-container');
if (!container) return;

const canvas = document.createElement('canvas');
canvas.id = 'vault-graph-canvas';
canvas.style.cssText = 'width:100%;height:100%;display:block;cursor:grab;';
container.appendChild(canvas);

const labelLayer = document.createElement('div');
labelLayer.id = 'vault-label-layer';
labelLayer.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden;';
container.appendChild(labelLayer);

// Load Three.js dynamically
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js';
script.onload = initGraph;
document.head.appendChild(script);

function initGraph() {
  const THREE = window.THREE;
  const nodes = VAULT_GRAPH.n;
  const edges = VAULT_GRAPH.e;
  const cats = VAULT_GRAPH.c;
  const nodeCount = nodes.length;
  const edgeCount = edges.length;

  // 4D math
  function identity4() { return Float32Array.from([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]); }
  function mul4(a,b) {
    const r = new Float32Array(16);
    for (let i=0;i<4;i++) for(let j=0;j<4;j++){let s=0;for(let k=0;k<4;k++)s+=a[i*4+k]*b[k*4+j];r[i*4+j]=s;}
    return r;
  }
  function rot4(angle,axA,axB) {
    const m=identity4(),c=Math.cos(angle),s=Math.sin(angle);
    m[axA*4+axA]=c;m[axB*4+axB]=c;m[axA*4+axB]=-s;m[axB*4+axA]=s;
    return m;
  }
  function apply4(v,m) {
    return [m[0]*v[0]+m[1]*v[1]+m[2]*v[2]+m[3]*v[3],m[4]*v[0]+m[5]*v[1]+m[6]*v[2]+m[7]*v[3],
            m[8]*v[0]+m[9]*v[1]+m[10]*v[2]+m[11]*v[3],m[12]*v[0]+m[13]*v[1]+m[14]*v[2]+m[15]*v[3]];
  }
  function compose(ang) {
    let r=identity4();
    const pl=[[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]];
    const k=['xy','xz','xw','yz','yw','zw'];
    for(let i=0;i<6;i++){const a=ang[k[i]]||0;if(a)r=mul4(rot4(a,pl[i][0],pl[i][1]),r);}
    return r;
  }
  function proj43(v,wCam,scale) {
    const d=Math.max(0.05,wCam-v[3]),f=scale/d;
    return [v[0]*f,v[1]*f,v[2]*f];
  }
  function clamp(v,lo,hi){return Math.min(hi,Math.max(lo,v));}

  // Compute node degrees
  const degrees = new Uint16Array(nodeCount);
  edges.forEach(([a,b])=>{degrees[a]++;degrees[b]++;});

  // Position on 4D torus
  const MAJOR_R=2.8, MINOR_R=1.1;
  const verts4d = new Array(nodeCount);
  const byCat = {};
  nodes.forEach((n,i)=>{(byCat[n[1]]=byCat[n[1]]||[]).push(i);});

  for(let i=0;i<nodeCount;i++){
    const catIdx=nodes[i][1];
    const catIds=byCat[catIdx]||[];
    const within=catIds.indexOf(i);
    const theta=(catIdx/cats.length)*Math.PI*2+(within*0.08);
    const phi=(within/catIds.length)*Math.PI*2;
    const j=0.25;
    verts4d[i]=[
      MAJOR_R*Math.cos(theta)+MINOR_R*Math.cos(phi)*Math.cos(theta)+(Math.random()-0.5)*j,
      MAJOR_R*Math.sin(theta)+MINOR_R*Math.cos(phi)*Math.sin(theta)+(Math.random()-0.5)*j,
      MINOR_R*Math.sin(phi)+(Math.random()-0.5)*j,
      MINOR_R*Math.cos(phi)*0.7+(Math.random()-0.5)*j
    ];
  }

  // Three.js setup
  const rect = container.getBoundingClientRect();
  const W = rect.width||600, H = rect.height||500;

  const renderer = new THREE.WebGLRenderer({canvas,antialias:true,alpha:true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
  renderer.setSize(W,H);
  renderer.setClearColor(0x000000,0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45,W/H,0.01,100);
  camera.position.set(0,0,7);

  // Shaders
  const VERT=`
    attribute float size;attribute float intensity;attribute vec3 hyperColor;
    varying vec3 vColor;varying float vInt;
    void main(){vColor=hyperColor;vInt=intensity;
    vec4 mv=modelViewMatrix*vec4(position,1.0);
    gl_PointSize=clamp(size*(250.0/max(0.001,-mv.z)),1.0,120.0);
    gl_Position=projectionMatrix*mv;}`;
  const FRAG=`
    varying vec3 vColor;varying float vInt;uniform float opacity;uniform float glow;
    void main(){vec2 c=gl_PointCoord-vec2(0.5);float d=length(c);
    if(d>0.55)discard;float h=smoothstep(0.55,0.28,d);float core=smoothstep(0.32,0.0,d);
    float a=clamp(core+h*glow,0.0,1.0)*opacity*clamp(vInt,0.05,1.35);
    gl_FragColor=vec4(mix(vColor*0.75,vColor,core),a);}`;

  // Point buffers
  const posArr=new Float32Array(nodeCount*3);
  const colorArr=new Float32Array(nodeCount*3);
  const sizeArr=new Float32Array(nodeCount);
  const intArr=new Float32Array(nodeCount);
  const geo=new THREE.BufferGeometry();
  geo.setAttribute('position',new THREE.BufferAttribute(posArr,3));
  geo.setAttribute('hyperColor',new THREE.BufferAttribute(colorArr,3));
  geo.setAttribute('size',new THREE.BufferAttribute(sizeArr,1));
  geo.setAttribute('intensity',new THREE.BufferAttribute(intArr,1));
  const mat=new THREE.ShaderMaterial({
    uniforms:{opacity:{value:0.92},glow:{value:0.45}},
    transparent:true,depthWrite:false,vertexColors:true,
    vertexShader:VERT,fragmentShader:FRAG,
    blending:THREE.AdditiveBlending
  });
  const pts=new THREE.Points(geo,mat);
  pts.frustumCulled=false;
  scene.add(pts);

  // Edge buffers
  const ePosArr=new Float32Array(edgeCount*6);
  const eColArr=new Float32Array(edgeCount*6);
  const eGeo=new THREE.BufferGeometry();
  eGeo.setAttribute('position',new THREE.BufferAttribute(ePosArr,3));
  eGeo.setAttribute('color',new THREE.BufferAttribute(eColArr,3));
  const eMat=new THREE.LineBasicMaterial({transparent:true,opacity:0.12,vertexColors:true,linewidth:1});
  const eLines=new THREE.LineSegments(eGeo,eMat);
  eLines.frustumCulled=false;
  scene.add(eLines);

  // Rotation state
  const rot={xy:0,xz:0,xw:0,yz:0,yw:0,zw:0};
  let autoTime=0;
  const speed={xw:0.05,yw:0.035,zw:0.02,xy:0.006,yz:0.01};
  let paused=false, graphHidden=false, speedMultiplier=1;

  // Drag controls
  let dragging=false,lastX=0,lastY=0,cameraZ=7;
  canvas.addEventListener('pointerdown',e=>{dragging=true;lastX=e.clientX;lastY=e.clientY;canvas.setPointerCapture(e.pointerId);canvas.style.cursor='grabbing';});
  window.addEventListener('pointermove',e=>{
    if(!dragging)return;
    const dx=e.clientX-lastX,dy=e.clientY-lastY;
    lastX=e.clientX;lastY=e.clientY;
    if(e.shiftKey){rot.xw+=dx*0.003;rot.yw+=dy*0.003;}
    else{rot.xy+=dx*0.002;rot.xz+=dy*0.002;}
  });
  window.addEventListener('pointerup',()=>{dragging=false;canvas.style.cursor='grab';});
  canvas.addEventListener('wheel',e=>{e.preventDefault();cameraZ=clamp(cameraZ-Math.sign(e.deltaY)*0.4,3,14);},{passive:false});

  // Labels
  const MAX_LABELS=25;
  const labelEls=[];
  for(let i=0;i<MAX_LABELS;i++){
    const el=document.createElement('div');
    el.style.cssText='position:absolute;font-family:var(--font-mono,"Geist Mono",monospace);white-space:nowrap;pointer-events:none;text-shadow:0 0 8px rgba(26,26,31,0.95),0 0 16px rgba(26,26,31,0.7);will-change:transform,opacity;';
    el.style.display='none';
    labelLayer.appendChild(el);
    labelEls.push(el);
  }

  const tmpV=new THREE.Vector3();
  function updateLabels(projected,rotated,wMin,wRange,dMin,dRange){
    const w=canvas.clientWidth,h=canvas.clientHeight;
    const hw=w/2,hh=h/2;
    const cands=[];
    for(let i=0;i<nodeCount;i++){
      const p=projected[i];
      tmpV.set(p[0],p[1],p[2]).project(camera);
      const sx=(tmpV.x*hw)+hw,sy=(-tmpV.y*hh)+hh;
      if(tmpV.z>1||tmpV.z<0||sx<-80||sx>w+80||sy<-40||sy>h+40)continue;
      const depth=(p[2]-dMin)/dRange;
      const wt=degrees[i]*1.5+(1-depth)*3;
      const fs=clamp(7+degrees[i]*0.6,7,14);
      const op=clamp(0.25+(1-depth)*0.75,0.1,0.95);
      cands.push({i,sx,sy,wt,fs,op});
    }
    cands.sort((a,b)=>b.wt-a.wt);
    const vis=[];
    for(const c of cands){
      let ok=true;
      for(const v of vis){const dx=c.sx-v.sx,dy=c.sy-v.sy;if(dx*dx+dy*dy<(c.fs+v.fs)*7){ok=false;break;}}
      if(ok){vis.push(c);if(vis.length>=MAX_LABELS)break;}
    }
    for(let j=0;j<MAX_LABELS;j++){
      const el=labelEls[j];
      if(j<vis.length){
        const v=vis[j];
        const node=nodes[v.i];
        const cc=CAT_COLORS[cats[node[1]]]||[1,0.42,0.21];
        el.textContent=node[0];
        el.style.display='';
        el.style.transform=`translate(${v.sx}px,${v.sy}px) translate(-50%,-120%)`;
        el.style.fontSize=v.fs+'px';
        el.style.opacity=v.op;
        el.style.color=`rgba(${Math.round(cc[0]*255)},${Math.round(cc[1]*255)},${Math.round(cc[2]*255)},${clamp(v.op+0.2,0.3,1)})`;
      }else{el.style.display='none';}
    }
  }

  // Edge gradient in orange tones
  const lineStops=[[0,[0.70,0.30,0.15]],[0.5,[1.0,0.42,0.21]],[1,[1.0,0.65,0.35]]];
  function gradC(t){
    t=clamp(t,0,1);
    for(let i=0;i<lineStops.length-1;i++){
      if(t>=lineStops[i][0]&&t<=lineStops[i+1][0]){
        const l=(t-lineStops[i][0])/(lineStops[i+1][0]-lineStops[i][0]);
        return lineStops[i][1].map((c,j)=>c+(lineStops[i+1][1][j]-c)*l);
      }
    }
    return lineStops[0][1];
  }

  let lastLabel=0;
  function animate(now){
    requestAnimationFrame(animate);
    if(paused)return;
    const dt=0.008*speedMultiplier;
    if(!dragging){
      autoTime+=dt;
      rot.xw+=speed.xw*dt;rot.yw+=speed.yw*dt;rot.zw+=speed.zw*dt;
      rot.xy+=speed.xy*dt;rot.yz+=speed.yz*dt;
    }
    camera.position.z+=(cameraZ-camera.position.z)*0.08;
    if(!dragging){camera.position.x=Math.sin(autoTime*0.08)*0.4;camera.position.y=Math.cos(autoTime*0.06)*0.25;}
    camera.lookAt(0,0,0);

    const rm=compose(rot);
    let wMin=1e9,wMax=-1e9;
    const rotated=[];
    for(let i=0;i<nodeCount;i++){const r=apply4(verts4d[i],rm);rotated[i]=r;if(r[3]<wMin)wMin=r[3];if(r[3]>wMax)wMax=r[3];}
    const wRange=wMax-wMin||1;

    const projected=[];
    let dMin=1e9,dMax=-1e9;
    for(let i=0;i<nodeCount;i++){
      const p=proj43(rotated[i],3.2,1.2);
      projected[i]=p;
      posArr[i*3]=p[0];posArr[i*3+1]=p[1];posArr[i*3+2]=p[2];
      if(p[2]<dMin)dMin=p[2];if(p[2]>dMax)dMax=p[2];
    }
    const dRange=dMax-dMin||1;

    for(let i=0;i<nodeCount;i++){
      const nw=(rotated[i][3]-wMin)/wRange;
      const cc=CAT_COLORS[cats[nodes[i][1]]]||[1,0.42,0.21];
      colorArr[i*3]=cc[0];colorArr[i*3+1]=cc[1];colorArr[i*3+2]=cc[2];
      sizeArr[i]=0.08+degrees[i]*0.025;
      intArr[i]=0.35+nw*0.9;
    }

    for(let e=0;e<edgeCount;e++){
      const [ai,bi]=edges[e];
      const a=projected[ai],b=projected[bi];
      const base=e*6;
      ePosArr[base]=a[0];ePosArr[base+1]=a[1];ePosArr[base+2]=a[2];
      ePosArr[base+3]=b[0];ePosArr[base+4]=b[1];ePosArr[base+5]=b[2];
      const nwa=(rotated[ai][3]-wMin)/wRange,nwb=(rotated[bi][3]-wMin)/wRange;
      const ca=gradC(nwa),cb=gradC(nwb);
      eColArr[base]=ca[0];eColArr[base+1]=ca[1];eColArr[base+2]=ca[2];
      eColArr[base+3]=cb[0];eColArr[base+4]=cb[1];eColArr[base+5]=cb[2];
    }

    geo.attributes.position.needsUpdate=true;
    geo.attributes.hyperColor.needsUpdate=true;
    geo.attributes.size.needsUpdate=true;
    geo.attributes.intensity.needsUpdate=true;
    eGeo.attributes.position.needsUpdate=true;
    eGeo.attributes.color.needsUpdate=true;
    renderer.render(scene,camera);
    if(now-lastLabel>60){updateLabels(projected,rotated,wMin,wRange,dMin,dRange);lastLabel=now;}
  }
  requestAnimationFrame(animate);

  // Graph controls
  const pauseBtn=document.getElementById('graph-pause');
  const toggleBtn=document.getElementById('graph-toggle');
  const speedSlider=document.getElementById('graph-speed');
  const heroVisual=document.getElementById('hero-visual');

  if(pauseBtn) pauseBtn.addEventListener('click',()=>{
    paused=!paused;
    pauseBtn.textContent=paused?'▶':'⏸';
    pauseBtn.title=paused?'Resume graph':'Pause graph';
  });

  if(toggleBtn) toggleBtn.addEventListener('click',()=>{
    graphHidden=!graphHidden;
    heroVisual.style.transition='opacity 0.4s ease';
    heroVisual.style.opacity=graphHidden?'0':'';
    toggleBtn.textContent=graphHidden?'○':'◉';
    toggleBtn.title=graphHidden?'Show graph':'Hide graph';
  });

  if(speedSlider) speedSlider.addEventListener('input',e=>{
    speedMultiplier=parseFloat(e.target.value);
  });

  // Resize observer
  const ro=new ResizeObserver(entries=>{
    const r=entries[0].contentRect;
    if(r.width>0&&r.height>0){
      camera.aspect=r.width/r.height;
      camera.updateProjectionMatrix();
      renderer.setSize(r.width,r.height);
    }
  });
  ro.observe(container);
}
})();
