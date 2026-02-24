// Vault 4D Graph - hero visual from Obsidian vault
// 452 nodes, 1314 edges - filtered from real vault data
(function() {
'use strict';

const VAULT_GRAPH = {"c":["idea","ai","wellbeing","design","person","tool","book","place"],"n":[["Serendipity",0],["AI Agents",1],["Mindset",0],["Novelty seeking",0],["Personal OS",0],["Voice Claude",1],["The System",0],["Meditation",2],["Mindfulness",2],["Creativity",0],["Software 3.0",0],["Claude code",1],["Knowledge Management",0],["Quantified self",0],["Design Thinking",3],["Psychology",2],["Consciousness",2],["Flow",0],["Randomness",0],["@Sergey Kadomsky",4],["Words I love",0],["∞→Diversify people I talk to",0],["Exploratory behaviour",0],["Flaneur",0],["AI Creativity",1],["My AI agents and automation",1],["MCP",5],["+Building effective agents",1],["AI Video tools",1],["AI Translation",1],["AI Pair Programming",1],["Artificial Intelligence",0],["AI Business models",1],["Mixture of Agents",1],["Course - Claude Code Lab for Products",1],["Agents UX",1],["Bot UX",3],["Gemini Deep Research",0],["Agents Benchmarking",1],["AI Agents Payments",1],["AI agents for Instagram",1],["AI chat bots",1],["AI Courses",1],["AI Tools for marketing",1],["Large Language Models",1],["Teaching AI Agents to Non-Technical Users - Comprehensive Ideas List",1],["Replit agent",1],["RAG",0],["Cline",0],["OpenAI Operator",1],["AI Art coachings agent",1],["GPT Researcher",1],["+AI agents -- what they are, how they work, and use cases",1],["AI and creativity",1],["Agent Engineering",1],["AI software development agents",1],["Agents",1],["Documentation for AI agents",1],["Active inference",0],["AI automation",1],["Windsurf",0],["AI is more creative than humans",1],["AI Researcher Agents",1],["Ethical Adaptive Triggers Framework",0],["Openinterpreter",0],["Agentic Coding",1],["@Dr. Alia Crum",4],["Body Mass Index (BMI)",0],["Placebo",0],["Personality trait",0],["Learning",0],["+The modern world hijacks your attention. Here’s how to take it back. Amishi Jha",0],["@Amishi Jha",4],["Ed Diener. Serious Research on Happiness",0],["personal knowledge management",0],["Obsidian",5],["Apple Health Data",0],["Avoid over-scaffolding",0],["Lifelogging",0],["Memex",0],["life management",0],["Citizen science",0],["Mac Mini",0],["Omi",0],["Bee",0],["Personal AI",0],["Plaud Note Pin",0],["Vibe coding",0],["Mirai",0],["Friend Wearable AI",0],["MoC - Knowledge Systems",0],["Apple Watch",0],["Local AI Inference",1],["Limitless Pendant",0],["Agent Skills",1],["The System - Telegram Agent",1],["Smart Turn",0],["Wake Word",0],["Self-concordance",0],["Claude Agent SDK",1],["Livekit",0],["People First Funds",0],["Voice agent frontend comparison",1],["system continuity",0],["Drift feedback",0],["Error detection",0],["Solopreneurship",0],["Failure recovery",0],["The System - Integration Architecture",0],["Mindfulness and HRV",2],["Mindfulness and Health",2],["@Jack Kornfield",4],["Meditation and the Brain",2],["@Michael Taft",4],["Meditation teachers",2],["Mindfulness and pain",2],["Mindful Productivity",2],["Mindfulness coaching",2],["Mindfulness Based Cognitive Therapy (MBCT)",2],["Mindfulness questionnaire",2],["@Shinzen Young",4],["Buddhism",0],["Books on Meditation recommended by Michael Taft",6],["Open monitoring",0],["Shamata",0],["@Tara Brach",4],["Mindfulness for Creativity",2],["@Thich Nhat Hanh",4],["Zen",0],["Curiosity",0],["@John Vervaeke",4],["@John Kabat-Zinn",4],["@Fedor Taranenko",4],["@Vincent Horn",4],["five goals or applications of mindfulness",2],["Compassion focused therapy",2],["Definition of Mindfulness",2],["@Dalai Lama",4],["@Victor Shiryaev",4],["Mindfulness and emotions",2],["Integration",0],["Compassion",0],["Acceptance and commitment therapy (ACT)",2],["Introspection",0],["Psychotherapy",2],["@Christopher Germer",4],["@David Lynch",4],["Living a creative lifestyle",0],["Creative Visualization",0],["Create connections",0],["@Andrej Karpathy",4],["Amp",0],["RIPER Workflow",0],["Claude Code Business",1],["llm-cli",1],["Integral Life Overview - October 2025",0],["AGENCY Lab - Claude Project Instructions",1],["Codex",0],["Understanding Claude Code",1],["AI Coding Agents",1],["Serendipity Recommendation Principles",0],["Context Management",0],["Command Line",0],["Continual_Learning_in_Claude_Code",1],["Claude Code Tools",1],["ai-sdk-v5-crash-course",5],["Claude skills",1],["My Focus",0],["claude code post 01",1],["OpenRouter",0],["opencode",0],["Factory AI",0],["Lab Launch Checklist",0],["Claude code how to use",1],["writing on claude code",1],["AI Security",1],["Active Externalism",0],["@Niklas Luhmann",4],["Linking your thinking",0],["Execution",0],["Note-making vs note-taking",0],["Idea generation",0],["Task Management",0],["Trusted systems",0],["Community Knowledge Management",0],["Build a trusted system",0],["@Andy Matuschak",4],["@Nick Milo",4],["Daily note",0],["Getting Things Done",0],["Map of content",0],["Zettelkasten",0],["Signal vs noise",0],["Mind3 community",0],["∞→ Your brain is for having ideas, not for storings them",0],["Maps making",0],["Вечнозеленые заметки должны быть интенсивно перелинкованы",0],["Knowledge Graphs",0],["Evergreen notes",0],["Obsidian alternatives",5],["Knowledge",0],["Вечнозеленые заметки должны быть атомарны",0],["procrastination",0],["Heart Rate Variability",0],["MoC - Health",0],["Local AI",0],["Doing science on your life",0],["Self-monitoring",0],["Self-regulation",0],["Life Mapping Tools",5],["Mood monitoring",0],["@Kevin Kelly",4],["Input Sources for AI System",1],["Proactive Health Management",0],["∞→Disease is shrinkage of capacity for adaptive variation",0],["Journaling",0],["Data lake",0],["AlterEgo",0],["∞→Wide dynamic range is healthy",0],["Wellbeing",0],["Ultrahuman",0],["Oura Ring",0],["Quantified relationships",0],["rumination",0],["+Why we self sabotage the recovery process. Learn how to refuel your brain and body the natural way.",0],["Personal Health Intelligence",0],["Reflective practice",0],["Quantified self course",0],["Behavioral activation monitoring",0],["Sleep tracking",0],["Collect → reflect",0],["Deciding What To Observe",0],["Human-centered design",3],["Problem solving",0],["Shared problem space",0],["Design your life",3],["Innovation",0],["Intelligence",0],["Detection of consciousness",2],["AI Consciousness",2],["Emergentism",0],["@Sam Harris",4],["Spectrum of consciousness",2],["+Your brain hallucinates your conscious reality",0],["Integrated Information Theory",0],["@Francis Crick",4],["Integrative information theory of Consciousness",2],["@Giulio Tononi",4],["Pure consciousness event",2],["Unconscious Bias",0],["Plant consciousness",2],["Focus",0],["Example Motivators",0],["Window of tolerance",0],["@Mihaly Csikszentmihalyi",4],["Deep work",0],["Feel flow",0],["Cognitive performance",0],["Mental states",0],["Hyperfocus",0],["Dynamic Difficulty Adjustment",0],["Feedback is crucial for learning",0],["The Scale of subjective states",0],["Entropy",0],["Brain",0],["Synchronicity",0],["Touch",0],["Zeigarnik effect",0],["Diversity",0],["Acceptance",0],["Autonomy",0],["Intention",0],["Commitment",0],["Writing",6],["Xenohormesis",0],["Deliberation",0],["@Alan W. Watts",4],["Agency (book)",6],["Polymaths",0],["Vulnerability",0],["Feedback loop",0],["Sex",0],["Awe",0],["Generalist",0],["Love",0],["Singularity",0],["@Gleb Kalinin",4],["Unpredictibility",0],["Emergence",0],["Synergy",0],["Experiment",0],["T-Shaped Person",0],["Not-knowing",0],["Human in focus",0],["Redundancy",0],["Awareness",0],["Long-term",0],["∞→Conversation is primary medium for developing ideas",0],["Relocation to Berlin",7],["How I use Obsidian for networking",5],["@Sigmund Freud",4],["Operant Conditioning",0],["@B. F. Skinner",4],["Unconscious",0],["@Paul Bloom",4],["@Ivan Pavlov",4],["Little Albert experiment",0],["Parental investment",0],["Koinophilia",0],["average faces",0],["Extinction (behaviour)",0],["Habituation",0],["Organism-environment system",0],["Multipotential",0],["Community",0],["Consulting Agreement",0],["Obsidian as a self-discovery tool",5],["@Anton Simanenko",4],["Building Skills for Claude",1],["n8n",0],["Agentic Knowledge Management",1],["Attention",0],["Salience cannot be computed",0],["Prompt engineering",0],["Salience",0],["Claude",1],["LSP",0],["@Tim Berners-Lee",4],["@Richard Feynman",4],["Antidisciplinarity",0],["Interdisciplinary Research",0],["@Salman Khan",4],["Collective Intelligence",0],["@Peter Senge",4],["Language Models",1],["Reasoning",0],["Notion",0],["ChatGPT",1],["Research on AI",0],["Robots",0],["Dangers of AI",0],["Machine learning",1],["Alignment problem",0],["AI Explained",1],["Oppurtunities in AI",0],["Business Models",1],["Business Model Canvas",1],["Personal Assistant",0],["Telegram",0],["Chat Bots",0],["General agent",1],["MoC - AI & Agents",1],["Obsidian + AI principles and approaches",1],["Obsidain AI",0],["Deliberate practice",0],["AI Therapy Analysis",2],["Think&Link 3",0],["OSWorld",0],["@Alexander Povaliaev",4],["AI Psychotherapy",2],["LangChain. Chat with Your Data",0],["@Harrison Chase",4],["Skin-Covered Bastards (chat)",0],["Generative AI for Everyone",1],["@Sam Altman",4],["+RouteLLM achieves 90- GPT4o Quality AND 80- CHEAPER - YouTube",1],["VibeBerlin Telegram bot",7],["AI for research papers",1],["Prompt Caching",0],["GraphRAG",0],["embeddings",0],["Contextual Retrieval",0],["Citations in Anthropic API",5],["My AI Project Ideas",1],["Tavily",0],["OpenAI Deep Research",1],["Agentic Behavior and Design Notes",1],["Subagents",1],["Devin",0],["Automation",0],["Zed AI",0],["Cursorisation",0],["Source of info on AI",0],["SWE-Agent",1],["GitHub Copilot",0],["Aider",0],["GSD Framework",0],["Lovable.dev",0],["My Obsidian plugins",5],["Pythogora",0],["OpenDevin",0],["Claude.md",1],["Documentation",0],["Behaviour",0],["Reinforcement learning",0],["Decision-making",0],["@Karl Friston",4],["Predictive processing",0],["Waste in Lean Manufacturing",0],["Eliminate. Simplify. Automate. Delegate.",0],["Text-To-Speech",0],["Speech to text",0],["Hallucinations as intelligence feature",0],["+Claude 3.5 Sonnet for agentic coding - YouTube",1],["Emergent abilities in language models",1],["Error-correction",0],["Collective Decision making",0],["@Andrew Huberman",4],["C-Reactive Protein",0],["Extraversion",0],["Openness",0],["HEXACO",0],["Neuroticism",0],["Alexithymia",0],["The Big Five Personality model",1],["Conscientiousness",0],["Agreeableness",0],["Testing effect",0],["Studying in Obsidian",5],["Meta-skills",0],["@Igor Ivanov",4],["Dopamine",0],["Learning curve",0],["Spaced Repetition",0],["Generation effect",0],["Implicit learning",0],["Metacognition",0],["Ambivalence",0],["Attunement",0],["Being",0],["Becoming",0],["Coherence",0],["Collaboration",0],["Connection",0],["Confusion",0],["Difference",0],["Externalization",0],["Inquiry",0],["Mirror",0],["Paradox",0],["Presence",0],["Resonance",0],["Surrender",0],["Variety",0],["Wicked Problem",0],["Witness",0]],"e":[[0,18],[0,19],[0,20],[0,21],[0,22],[0,23],[1,24],[1,25],[1,26],[1,27],[1,28],[1,9],[1,29],[1,30],[1,31],[1,32],[1,33],[1,34],[1,35],[1,36],[1,37],[1,38],[1,39],[1,40],[1,41],[1,42],[1,43],[1,44],[1,45],[1,46],[1,47],[1,48],[1,49],[1,50],[1,51],[1,11],[1,52],[1,53],[1,54],[1,55],[1,56],[1,57],[1,58],[1,59],[1,60],[1,61],[1,62],[1,63],[1,64],[1,65],[2,66],[2,67],[2,68],[3,69],[3,70],[3,71],[3,72],[3,22],[3,73],[4,74],[4,10],[4,75],[4,76],[4,77],[4,78],[4,79],[4,80],[4,6],[4,81],[4,82],[4,13],[4,83],[4,84],[4,85],[4,86],[4,87],[4,11],[4,88],[4,89],[4,90],[4,91],[4,5],[4,92],[4,93],[4,94],[5,95],[5,10],[5,96],[5,97],[5,98],[5,6],[5,99],[5,100],[5,82],[5,101],[5,87],[5,94],[5,102],[6,95],[6,10],[6,103],[6,75],[6,76],[6,82],[6,104],[6,105],[6,106],[6,107],[6,11],[6,108],[7,109],[7,110],[7,111],[7,112],[7,113],[7,8],[7,114],[7,115],[7,116],[7,117],[7,118],[7,119],[7,120],[7,121],[7,122],[7,123],[7,124],[7,125],[7,126],[7,127],[7,128],[8,129],[8,130],[8,131],[8,109],[8,110],[8,111],[8,132],[8,112],[8,113],[8,133],[8,134],[8,135],[8,114],[8,117],[8,116],[8,136],[8,118],[8,137],[8,138],[8,139],[8,119],[8,120],[8,121],[8,140],[8,122],[8,123],[8,141],[8,125],[8,126],[8,142],[8,143],[8,144],[8,145],[9,53],[9,126],[9,146],[9,147],[9,148],[9,149],[9,9],[10,150],[10,99],[10,87],[11,151],[11,152],[11,153],[11,154],[11,155],[11,156],[11,157],[11,34],[11,158],[11,159],[11,160],[11,161],[11,162],[11,163],[11,164],[11,165],[11,166],[11,87],[11,167],[11,168],[11,56],[11,169],[11,170],[11,171],[11,172],[11,173],[11,174],[11,65],[11,175],[12,176],[12,177],[12,75],[12,178],[12,179],[12,180],[12,181],[12,182],[12,183],[12,184],[12,185],[12,186],[12,187],[12,188],[12,189],[12,190],[12,191],[12,192],[12,193],[12,194],[12,195],[12,196],[12,197],[12,198],[12,199],[12,200],[12,201],[12,202],[13,203],[13,204],[13,205],[13,206],[13,76],[13,207],[13,208],[13,209],[13,210],[13,78],[13,80],[13,211],[13,22],[13,13],[13,212],[13,213],[13,214],[13,215],[13,216],[13,217],[13,218],[13,219],[13,220],[13,221],[13,222],[13,223],[13,224],[13,225],[13,226],[13,227],[13,228],[13,229],[13,93],[13,230],[13,231],[14,232],[14,233],[14,234],[14,235],[14,236],[16,237],[16,238],[16,239],[16,240],[16,241],[16,242],[16,243],[16,16],[16,244],[16,245],[16,246],[16,247],[16,248],[16,249],[16,250],[17,251],[17,252],[17,253],[17,254],[17,255],[17,256],[17,257],[17,258],[17,259],[17,260],[17,261],[17,262],[18,263],[20,129],[20,264],[20,265],[20,176],[20,266],[20,267],[20,268],[20,269],[20,270],[20,271],[20,272],[8,20],[20,273],[20,274],[20,275],[20,276],[20,277],[20,278],[20,279],[20,280],[20,281],[20,282],[20,283],[20,284],[20,285],[20,286],[20,287],[20,288],[20,289],[20,290],[20,291],[20,292],[20,293],[20,294],[20,295],[20,296],[21,297],[21,298],[21,299],[22,312],[3,23],[23,316],[24,317],[25,26],[25,318],[25,319],[25,320],[26,47],[26,48],[26,325],[26,318],[26,326],[26,27],[26,75],[27,318],[29,31],[29,44],[31,53],[31,334],[31,335],[31,59],[31,336],[31,337],[31,338],[31,339],[31,340],[31,341],[31,342],[31,343],[31,344],[32,345],[32,346],[34,161],[34,156],[35,45],[35,347],[35,54],[35,36],[35,63],[36,347],[36,348],[36,63],[36,349],[38,357],[41,358],[31,41],[41,334],[41,337],[41,359],[41,341],[42,360],[31,42],[42,361],[42,362],[42,363],[44,338],[44,364],[31,44],[44,325],[44,365],[42,45],[45,65],[46,366],[46,55],[47,367],[47,368],[47,369],[47,370],[47,371],[47,372],[11,47],[44,47],[48,65],[50,373],[51,374],[51,375],[37,51],[53,61],[54,55],[54,376],[54,94],[25,55],[55,377],[55,378],[55,379],[30,55],[55,380],[55,381],[55,382],[48,55],[55,383],[55,384],[55,385],[11,55],[55,386],[55,387],[55,388],[55,389],[55,60],[55,390],[55,64],[55,65],[56,391],[57,392],[57,65],[58,393],[58,394],[58,395],[58,396],[58,397],[59,398],[59,399],[46,60],[60,87],[60,65],[9,61],[62,375],[49,62],[37,62],[51,62],[63,347],[64,162],[64,400],[64,401],[44,64],[65,402],[65,378],[65,237],[65,403],[65,261],[65,275],[30,65],[65,335],[65,233],[65,404],[65,320],[65,405],[65,354],[65,383],[65,87],[65,385],[65,390],[65,406],[66,407],[66,68],[67,408],[67,203],[69,409],[69,410],[69,411],[69,412],[69,413],[69,414],[69,415],[69,416],[70,417],[70,418],[70,419],[70,420],[70,421],[70,180],[70,422],[70,423],[70,424],[17,70],[70,425],[70,426],[71,321],[71,72],[8,71],[72,321],[8,72],[73,137],[73,284],[74,418],[12,74],[74,75],[9,74],[74,275],[74,178],[74,180],[74,233],[74,183],[74,184],[74,422],[74,185],[74,320],[74,189],[74,423],[74,190],[74,354],[65,74],[74,191],[74,192],[74,424],[74,325],[74,196],[55,74],[70,74],[74,198],[74,200],[74,201],[75,273],[75,178],[75,180],[75,191],[76,203],[76,221],[6,77],[10,77],[11,77],[79,176],[79,90],[79,327],[79,191],[75,79],[74,80],[80,321],[76,80],[80,208],[80,98],[6,80],[80,189],[80,167],[5,80],[31,81],[13,81],[81,212],[78,83],[83,86],[5,83],[13,83],[83,93],[83,84],[78,84],[84,86],[13,84],[84,93],[78,86],[5,86],[13,86],[86,93],[87,150],[87,366],[87,157],[75,88],[6,88],[88,92],[5,88],[82,88],[10,88],[76,88],[11,88],[84,89],[86,89],[89,93],[83,89],[74,90],[90,327],[75,90],[90,209],[90,251],[90,99],[90,183],[90,184],[90,353],[90,297],[90,190],[90,161],[90,192],[90,194],[90,167],[1,90],[90,197],[90,324],[90,198],[76,91],[10,92],[6,92],[82,92],[13,92],[11,92],[5,92],[94,351],[11,94],[10,95],[75,95],[76,95],[94,95],[95,99],[13,95],[4,95],[11,95],[95,96],[96,100],[96,97],[96,401],[98,321],[34,98],[98,106],[95,100],[101,106],[103,105],[103,104],[103,107],[4,104],[104,324],[104,105],[105,107],[5,106],[106,286],[104,107],[95,108],[4,108],[5,108],[10,108],[108,351],[103,108],[11,108],[111,125],[112,112],[112,128],[112,141],[113,120],[112,113],[113,122],[114,125],[111,114],[114,138],[114,133],[114,241],[114,145],[115,138],[115,120],[117,136],[110,118],[121,124],[121,128],[111,122],[126,148],[127,141],[127,128],[120,128],[123,128],[8,128],[116,128],[129,129],[130,138],[121,130],[120,134],[135,141],[129,136],[130,136],[136,208],[136,241],[7,136],[136,145],[121,137],[120,138],[7,138],[109,139],[16,140],[140,140],[132,142],[142,269],[138,142],[142,144],[150,337],[151,170],[151,171],[151,159],[65,151],[153,164],[151,153],[34,153],[26,153],[153,171],[153,159],[153,157],[65,153],[154,169],[65,157],[157,320],[158,174],[158,173],[55,159],[48,159],[1,159],[159,378],[60,159],[159,170],[159,171],[159,326],[159,385],[157,159],[65,159],[160,337],[12,161],[162,170],[26,163],[163,166],[65,163],[164,350],[158,164],[164,351],[162,164],[164,326],[56,164],[5,164],[164,173],[164,174],[34,165],[166,325],[167,321],[95,167],[167,204],[34,167],[4,167],[5,167],[164,169],[44,169],[1,170],[48,170],[170,171],[170,385],[157,170],[1,171],[65,171],[34,172],[156,172],[168,174],[54,175],[175,351],[75,176],[176,185],[176,189],[4,176],[176,191],[176,324],[176,312],[177,191],[178,190],[178,180],[178,192],[178,195],[178,186],[178,187],[179,185],[180,424],[180,196],[14,181],[182,189],[116,182],[183,188],[183,189],[176,183],[178,183],[179,183],[182,183],[183,194],[183,198],[183,185],[75,184],[184,184],[184,314],[184,193],[184,197],[185,199],[185,399],[75,185],[186,198],[75,186],[186,186],[4,188],[189,267],[189,194],[185,189],[190,192],[190,198],[190,195],[75,190],[187,190],[191,198],[192,321],[180,192],[192,198],[192,195],[193,358],[74,194],[194,267],[194,198],[47,197],[197,369],[177,198],[198,201],[196,198],[199,358],[178,199],[75,199],[176,200],[200,321],[200,237],[75,200],[31,200],[200,330],[1,200],[70,200],[203,203],[91,203],[203,214],[205,216],[206,215],[22,206],[207,210],[207,226],[207,258],[207,228],[207,215],[208,223],[209,299],[209,210],[4,209],[167,209],[209,215],[8,210],[212,213],[214,218],[215,226],[215,215],[215,273],[217,400],[218,321],[203,218],[218,329],[218,223],[220,225],[203,220],[218,220],[220,221],[221,229],[221,225],[203,221],[218,221],[213,221],[214,221],[223,223],[78,224],[212,225],[213,225],[226,354],[226,226],[224,227],[78,228],[227,230],[231,235],[233,237],[9,233],[233,395],[233,234],[17,233],[234,234],[234,329],[234,332],[234,330],[214,234],[235,395],[17,235],[235,235],[3,236],[237,402],[237,237],[237,239],[9,237],[237,397],[31,237],[14,237],[17,237],[237,426],[237,332],[237,250],[238,246],[238,248],[240,288],[243,246],[243,396],[244,247],[238,244],[246,247],[130,248],[249,304],[251,321],[167,251],[124,251],[208,253],[257,264],[257,321],[233,257],[257,258],[258,262],[259,321],[187,260],[261,297],[31,263],[267,321],[8,269],[73,270],[271,272],[142,272],[275,335],[275,395],[275,354],[215,275],[275,406],[276,312],[7,276],[278,283],[280,297],[281,304],[283,291],[284,421],[281,284],[277,286],[286,293],[287,340],[288,404],[186,297],[117,298],[301,302],[70,305],[302,305],[268,308],[308,309],[310,310],[306,310],[70,311],[8,311],[129,313],[218,313],[19,313],[70,313],[234,313],[291,313],[3,313],[313,329],[236,313],[313,330],[286,314],[75,316],[318,377],[57,318],[318,325],[59,319],[6,319],[99,319],[47,320],[75,320],[130,321],[8,321],[7,321],[31,323],[44,323],[321,324],[324,397],[167,325],[65,326],[4,327],[70,328],[329,330],[214,329],[236,330],[218,330],[140,330],[1,330],[330,332],[233,332],[332,395],[332,406],[199,336],[75,336],[1,339],[44,339],[340,342],[334,341],[32,344],[85,347],[337,348],[41,349],[150,350],[4,350],[1,350],[10,350],[5,350],[350,351],[11,350],[94,350],[10,351],[42,351],[340,351],[351,353],[1,351],[169,351],[54,351],[5,351],[97,351],[4,351],[52,351],[55,351],[27,351],[342,351],[351,359],[100,351],[47,351],[351,355],[337,353],[325,353],[75,353],[261,354],[280,354],[354,422],[354,423],[354,405],[17,354],[70,354],[337,355],[325,355],[356,358],[116,356],[1,357],[334,359],[349,359],[360,361],[360,370],[44,360],[317,362],[31,362],[44,367],[27,376],[1,376],[65,376],[373,377],[39,377],[377,386],[378,383],[378,390],[1,378],[379,399],[380,385],[380,384],[381,387],[317,382],[343,382],[383,390],[17,384],[384,384],[384,385],[378,385],[385,390],[57,386],[46,389],[378,389],[325,390],[1,390],[99,391],[166,391],[11,391],[70,394],[56,397],[398,399],[100,400],[400,401],[5,401],[239,402],[207,402],[397,402],[402,426],[31,402],[243,402],[7,402],[402,405],[402,425],[238,402],[9,402],[394,402],[105,402],[354,402],[16,402],[324,402],[321,402],[233,402],[44,402],[246,402],[70,402],[250,402],[44,404],[237,405],[261,405],[397,405],[405,421],[394,405],[395,405],[280,405],[44,405],[16,405],[405,425],[405,426],[58,405],[70,405],[294,405],[75,406],[395,406],[184,406],[405,406],[193,406],[197,406],[410,414],[409,411],[411,415],[411,416],[411,414],[8,412],[412,414],[409,414],[414,415],[414,416],[417,417],[418,423],[75,418],[301,421],[417,424],[16,426],[8,426],[273,426],[20,427],[20,428],[0,428],[20,429],[0,429],[20,430],[20,431],[20,432],[20,433],[20,434],[20,435],[20,436],[20,437],[20,438],[20,439],[20,440],[0,440],[20,441],[0,441],[20,442],[0,442],[20,443],[20,444],[20,445],[0,445]]};

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
  let dragging=false,lastX=0,lastY=0,cameraZ=7,dragMoved=false;
  canvas.addEventListener('pointerdown',e=>{dragging=true;dragMoved=false;lastX=e.clientX;lastY=e.clientY;canvas.setPointerCapture(e.pointerId);canvas.style.cursor='grabbing';});
  window.addEventListener('pointermove',e=>{
    if(!dragging)return;
    const dx=e.clientX-lastX,dy=e.clientY-lastY;
    if(Math.abs(dx)>2||Math.abs(dy)>2)dragMoved=true;
    lastX=e.clientX;lastY=e.clientY;
    if(e.shiftKey){rot.xw+=dx*0.003;rot.yw+=dy*0.003;}
    else{rot.xy+=dx*0.002;rot.xz+=dy*0.002;}
  });
  window.addEventListener('pointerup',()=>{dragging=false;canvas.style.cursor='grab';});
  canvas.addEventListener('wheel',e=>{e.preventDefault();cameraZ=clamp(cameraZ-Math.sign(e.deltaY)*0.4,3,14);},{passive:false});

  // Click-to-zoom state
  let focusedNode=-1, zoomAnim=null, lastProjected=null;
  const ZOOM_DURATION=500; // ms
  const ZOOM_DISTANCE=3.5; // camera distance when zoomed in
  const defaultCameraZ=7;

  // Focused node label overlay
  const focusLabel=document.createElement('div');
  focusLabel.style.cssText='position:absolute;font-family:var(--font-mono,"Geist Mono",monospace);white-space:nowrap;pointer-events:none;text-shadow:0 0 10px rgba(26,26,31,0.95),0 0 20px rgba(26,26,31,0.8);will-change:transform,opacity;font-size:16px;opacity:0;transition:opacity 0.3s ease;z-index:10;';
  labelLayer.appendChild(focusLabel);

  function easeInOutCubic(t){return t<0.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;}

  function startZoomTo(nodeIdx){
    const p=lastProjected[nodeIdx];
    if(!p)return;
    const startPos={x:camera.position.x,y:camera.position.y,z:camera.position.z};
    // Target: look at node from a closer distance along the camera->node line
    const nx=p[0],ny=p[1],nz=p[2];
    // Camera approaches node but stays offset in Z
    const dx=nx-camera.position.x,dy=ny-camera.position.y,dz=nz-camera.position.z;
    const dist=Math.sqrt(dx*dx+dy*dy+dz*dz);
    const approach=Math.max(0,dist-ZOOM_DISTANCE)/dist;
    const targetPos={
      x:startPos.x+dx*approach,
      y:startPos.y+dy*approach,
      z:startPos.z+dz*approach
    };
    const targetLookAt={x:nx,y:ny,z:nz};
    // If already focused on another node, start lookAt from that node's position
    let startLookAt={x:0,y:0,z:0};
    if(focusedNode>=0&&lastProjected&&lastProjected[focusedNode]){
      const fp=lastProjected[focusedNode];
      startLookAt={x:fp[0],y:fp[1],z:fp[2]};
    }
    const startTime=performance.now();
    focusedNode=nodeIdx;
    zoomAnim={startPos,targetPos,startLookAt,targetLookAt,startTime,zooming:'in'};
    // Show label
    const node=nodes[nodeIdx];
    const cc=CAT_COLORS[cats[node[1]]]||[1,0.42,0.21];
    focusLabel.textContent=node[0];
    focusLabel.style.color='rgba('+Math.round(cc[0]*255)+','+Math.round(cc[1]*255)+','+Math.round(cc[2]*255)+',1)';
    focusLabel.style.opacity='1';
    canvas.style.cursor='pointer';
  }

  function startZoomOut(){
    const startPos={x:camera.position.x,y:camera.position.y,z:camera.position.z};
    const targetPos={x:0,y:0,z:defaultCameraZ};
    // Use the current focused node position (accounts for rotation drift)
    let startLookAt={x:0,y:0,z:0};
    if(focusedNode>=0&&lastProjected&&lastProjected[focusedNode]){
      const fp=lastProjected[focusedNode];
      startLookAt={x:fp[0],y:fp[1],z:fp[2]};
    }
    const targetLookAt={x:0,y:0,z:0};
    const startTime=performance.now();
    focusedNode=-1;
    zoomAnim={startPos,targetPos,startLookAt,targetLookAt,startTime,zooming:'out'};
    focusLabel.style.opacity='0';
    canvas.style.cursor='grab';
  }

  function hitTestNode(clientX,clientY){
    if(!lastProjected)return -1;
    const rect=canvas.getBoundingClientRect();
    const cw=canvas.clientWidth,ch=canvas.clientHeight;
    const hw=cw/2,hh=ch/2;
    const mx=clientX-rect.left,my=clientY-rect.top;
    let bestIdx=-1,bestDist=Infinity;
    const threshold=20; // px hit radius
    for(let i=0;i<nodeCount;i++){
      const p=lastProjected[i];
      if(!p)continue;
      tmpV.set(p[0],p[1],p[2]).project(camera);
      if(tmpV.z>1||tmpV.z<0)continue;
      const sx=(tmpV.x*hw)+hw,sy=(-tmpV.y*hh)+hh;
      const dx=sx-mx,dy=sy-my;
      const d=Math.sqrt(dx*dx+dy*dy);
      if(d<threshold&&d<bestDist){bestDist=d;bestIdx=i;}
    }
    return bestIdx;
  }

  canvas.addEventListener('click',e=>{
    if(dragMoved)return; // ignore drag-end clicks
    const hit=hitTestNode(e.clientX,e.clientY);
    if(hit>=0&&hit!==focusedNode){
      startZoomTo(hit);
    }else{
      if(focusedNode>=0)startZoomOut();
    }
  });

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
    const isFocused=focusedNode>=0;
    const isAnimating=zoomAnim&&!zoomAnim.done;

    // 1. Update auto-rotation (slowed when focused)
    const rotScale=isFocused?0.15:1;
    if(!dragging&&!isAnimating){
      autoTime+=dt;
      rot.xw+=speed.xw*dt*rotScale;rot.yw+=speed.yw*dt*rotScale;rot.zw+=speed.zw*dt*rotScale;
      rot.xy+=speed.xy*dt*rotScale;rot.yz+=speed.yz*dt*rotScale;
    }

    // 2. Camera positioning
    if(isAnimating){
      // Tween camera position and lookAt during zoom
      const elapsed=now-zoomAnim.startTime;
      const t=clamp(elapsed/ZOOM_DURATION,0,1);
      const et=easeInOutCubic(t);
      const sp=zoomAnim.startPos,tp=zoomAnim.targetPos;
      const sl=zoomAnim.startLookAt,tl=zoomAnim.targetLookAt;
      camera.position.x=sp.x+(tp.x-sp.x)*et;
      camera.position.y=sp.y+(tp.y-sp.y)*et;
      camera.position.z=sp.z+(tp.z-sp.z)*et;
      camera.lookAt(
        sl.x+(tl.x-sl.x)*et,
        sl.y+(tl.y-sl.y)*et,
        sl.z+(tl.z-sl.z)*et
      );
      if(t>=1){
        if(zoomAnim.zooming==='out'){zoomAnim=null;cameraZ=defaultCameraZ;}
        else{zoomAnim.done=true;}
      }
    }else if(!isFocused){
      // Default unfocused camera behavior
      camera.position.z+=(cameraZ-camera.position.z)*0.08;
      if(!dragging){camera.position.x=Math.sin(autoTime*0.08)*0.4;camera.position.y=Math.cos(autoTime*0.06)*0.25;}
      camera.lookAt(0,0,0);
    }
    // When focused+done animating, lookAt is set after projection below

    // 3. Project 4D -> 3D
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
    lastProjected=projected;

    // 4. When focused (post-animation), track the node
    if(isFocused&&!isAnimating){
      const fp=projected[focusedNode];
      if(fp)camera.lookAt(fp[0],fp[1],fp[2]);
    }

    // 5. Update node visuals
    for(let i=0;i<nodeCount;i++){
      const nw=(rotated[i][3]-wMin)/wRange;
      const cc=CAT_COLORS[cats[nodes[i][1]]]||[1,0.42,0.21];
      colorArr[i*3]=cc[0];colorArr[i*3+1]=cc[1];colorArr[i*3+2]=cc[2];
      if(i===focusedNode){
        sizeArr[i]=0.25+degrees[i]*0.035;
        intArr[i]=1.3;
      }else{
        sizeArr[i]=0.08+degrees[i]*0.025;
        intArr[i]=0.35+nw*0.9;
      }
    }

    // 6. Update edge visuals
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

    // 7. Render
    geo.attributes.position.needsUpdate=true;
    geo.attributes.hyperColor.needsUpdate=true;
    geo.attributes.size.needsUpdate=true;
    geo.attributes.intensity.needsUpdate=true;
    eGeo.attributes.position.needsUpdate=true;
    eGeo.attributes.color.needsUpdate=true;
    renderer.render(scene,camera);

    // 8. Labels
    if(now-lastLabel>60){
      updateLabels(projected,rotated,wMin,wRange,dMin,dRange);
      lastLabel=now;
    }

    // 9. Position the focus label above the focused node
    if(isFocused){
      const fp=projected[focusedNode];
      if(fp){
        const cw=canvas.clientWidth,ch=canvas.clientHeight;
        tmpV.set(fp[0],fp[1],fp[2]).project(camera);
        const sx=(tmpV.x*cw/2)+cw/2,sy=(-tmpV.y*ch/2)+ch/2;
        focusLabel.style.transform='translate('+sx+'px,'+sy+'px) translate(-50%,-180%)';
      }
    }
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

  // Fullscreen toggle (desktop)
  const fsBtn=document.getElementById('graph-fullscreen');
  const heroEl=document.getElementById('hero');
  if(fsBtn&&heroEl) fsBtn.addEventListener('click',()=>{
    const isFs=heroEl.classList.toggle('graph-fullscreen');
    fsBtn.textContent=isFs?'✕':'⛶';
    fsBtn.title=isFs?'Exit fullscreen':'Fullscreen graph';
    if(isFs){
      const r=container.getBoundingClientRect();
      if(r.width>0&&r.height>0){camera.aspect=r.width/r.height;camera.updateProjectionMatrix();renderer.setSize(r.width,r.height);}
    }
  });

  // Mobile graph reveal
  const mobileReveal=document.getElementById('graph-mobile-reveal');
  const graphControls=document.getElementById('graph-controls');
  if(mobileReveal) mobileReveal.addEventListener('click',e=>{
    e.preventDefault();
    heroVisual.classList.add('graph-mobile-active');
    heroVisual.style.opacity='';
    if(graphControls) graphControls.classList.add('graph-mobile-active');
    mobileReveal.classList.add('hidden');
    const r=container.getBoundingClientRect();
    if(r.width>0&&r.height>0){camera.aspect=r.width/r.height;camera.updateProjectionMatrix();renderer.setSize(r.width,r.height);}
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
