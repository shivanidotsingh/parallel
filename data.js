const eventsByYear = {
  1820: [
    "Liberia is founded as a settlement for freed African Americans by the American Colonization Society.",
    "The British East India Company consolidates control over Assam in northeastern India after defeating Burmese forces."
  ],
  1821: [
    "Mexico gains independence from Spain after 11 years of revolutionary war.",
    "The Ashanti Empire wages war against the British in the Gold Coast (modern-day Ghana)."
  ],
  1822: [
    "Brazil declares independence from Portugal under Dom Pedro I.",
    "Shaka Zulu expands the Zulu Kingdom through military campaigns across southern Africa."
  ],
  1823: [
    "The Monroe Doctrine is declared by the U.S., warning European powers against further colonization in the Americas.",
    "The Burmese Konbaung Dynasty expands its territory, defeating the kingdom of Assam (modern northeast India)."
  ],
  1824: [
    "The First Anglo-Burmese War begins between British India and the Burmese Empire.",
    "The Ashanti defeat British forces in the First Anglo-Ashanti War in present-day Ghana."
  ],
  1825: [
    "Russia suppresses the Decembrist revolt, an uprising demanding constitutional monarchy.",
    "The British abolish the Malabar pepper trade monopoly in southern India, opening markets."
  ],
  1826: [
    "The first railway in India, a small experimental line, is established near Madras.",
    "The Sokoto Caliphate, one of the largest empires in Africa, expands under Sultan Bello in present-day Nigeria."
  ],
  1827: [
    "The Battle of Navarino sees a European alliance defeat the Ottoman-Egyptian fleet, aiding Greek independence.",
    "Sultan Seyyid Said relocates the capital of Oman to Zanzibar, cementing Swahili coastal trade dominance."
  ],
  1828: [
    "The Russo-Turkish War begins over control of Eastern Europe and the Caucasus.",
    "The Burmese Empire cedes Assam and parts of Manipur to the British East India Company."
  ],
  1829: [
    "Sati (widow immolation) is officially banned by the British in India under Governor-General Lord William Bentinck.",
    "The Cape Colony (modern South Africa) begins formal education for freed slaves and non-Europeans."
  ],
  1830: [
    "France invades and begins colonization of Algeria, sparking decades of resistance.",
    "A revolt in Java (Indonesia) leads to repression under Dutch colonial rule."
  ],
  1831: [
    "Nat Turner's slave rebellion shakes the American South.",
    "The Xhosa people resist British encroachment during the Sixth Frontier War in South Africa."
  ],
  1832: [
    "The Reform Act is passed in Britain, expanding electoral rights.",
    "Cholera spreads from India to Europe in the first global pandemic of the modern era."
  ],
  1833: [
    "Slavery is abolished throughout the British Empire.",
    "The British suppress the Mysore rebellion in southern India."
  ],
  1834: [
    "The Portuguese Inquisition is abolished after nearly 300 years.",
    "Nguni migrations and the Mfecane wars reshape southern Africa’s political landscape."
  ],
  1835: [
    "The British annex the region of Sindh in present-day Pakistan.",
    "Haitian forces repel Dominican revolutionaries; tensions in Hispaniola escalate."
  ],
  1836: [
    "The Battle of the Alamo becomes a defining moment in the Texas Revolution.",
    "Zanzibar becomes a regional trade power under Sultan Said bin Sultan."
  ],
  1837: [
    "Queen Victoria ascends the British throne, marking the beginning of the Victorian era.",
    "Burmese resistance escalates against British rule in Arakan and Tenasserim (now Myanmar)."
  ],
  1838: [
    "The First Anglo-Afghan War begins as the British try to install a puppet ruler in Afghanistan.",
    "The Great Trek begins as Boer settlers move into interior South Africa, sparking conflicts with local kingdoms."
  ],
  1839: [
    "The First Opium War begins between Britain and China after Chinese authorities destroy opium stockpiles.",
    "Ethiopia defeats an Ottoman-led force in the Battle of Debre Tabor, asserting independence."
  ],
  1840: [
    "New Zealand becomes a British colony with the signing of the Treaty of Waitangi.",
    "Nguyen Dynasty solidifies imperial rule in Vietnam and suppresses Catholic uprisings."
  ],
  1841: [
    "Hong Kong Island is occupied by Britain following early victories in the First Opium War.",
    "A major famine strikes northern China, resulting in widespread hardship."
  ],
  1842: [
    "The Treaty of Nanking ends the First Opium War; China cedes Hong Kong to Britain.",
    "The Boers establish the Natalia Republic in southern Africa."
  ],
  1843: [
    "Sindh is annexed by the British East India Company following military conquest.",
    "The Yoruba city-states in modern Nigeria engage in internal wars and trade competition with Europeans."
  ],
  1844: [
    "The Dominican Republic declares independence from Haiti.",
    "The French intensify military campaigns against Algerian resistance led by Emir Abdelkader."
  ],
  1845: [
    "The Great Famine begins in Ireland, leading to mass emigration and death.",
    "The Sikhs resist British interference, leading to the First Anglo-Sikh War in India."
  ],
  1846: [
    "The Mexican-American War begins over disputed Texas territory.",
    "A large slave rebellion is thwarted in Bahia, Brazil — one of the largest uprisings in the Americas."
  ],
  1847: [
    "Liberia becomes the first African republic governed by formerly enslaved African Americans.",
    "The Taiping Rebellion begins to simmer in China, driven by a blend of Christianity and anti-Qing sentiment."
  ]
  1850: [
      "The Compromise of 1850 was passed, addressing issues related to slavery and territorial expansion in the United States.",
      "The Taiping Rebellion began in China, led by Hong Xiuquan, who claimed to be the younger brother of Jesus Christ."
  ],
  1851: [
      "The Great Exhibition opened in London's Crystal Palace, the first international exhibition of manufactured products.",
      "Gold was discovered near Bathurst, New South Wales, sparking Australia's first gold rush."
  ],
  1852: [
      "Louis-Napoleon Bonaparte established the Second French Empire, proclaiming himself Emperor Napoleon III.",
      "The Sand River Convention was signed, recognizing the independence of the Transvaal Boers from British rule in South Africa."
  ],
  1853: [
      "Commodore Matthew Perry of the United States Navy arrived in Japan with four warships, forcing the opening of Japanese ports to American trade.",
      "The Crimean War began as the Ottoman Empire declared war on Russia."
  ],
  1854: [
      "The Kansas-Nebraska Act was passed, allowing settlers in those territories to determine whether to allow slavery.",
      "The Treaty of Kanagawa was signed between Japan and the United States, ending Japan's isolation."
  ],
  1855: [
      "The Eureka Rebellion miners were acquitted in a public trial, leading to electoral reform and democracy in the colony of Victoria, Australia.",
      "The Hatt-ı Hümayun decree was issued, promising equality for all Ottoman citizens regardless of religion."
  ],
  1856: [
      "The Second Opium War began between China and a coalition of Western powers.",
      "The Pottawatomie Massacre occurred in Kansas Territory, where John Brown and his supporters killed five pro-slavery settlers."
  ],
  1857: [
      "The Indian Rebellion (Sepoy Mutiny) began against British East India Company rule.",
      "The Mexican Constitution of 1857 was adopted, establishing a liberal federal republic."
  ],
  1858: [
      "The Treaty of Amity and Commerce was signed between Japan and the United States, opening more Japanese ports to trade.",
      "The Colony of British Columbia was established on the Pacific coast of North America."
  ],
  1859: [
      "The Battle of Solferino was fought between French-Sardinian and Austrian forces, inspiring Henry Dunant to create what would become the International Red Cross.",
      "John Brown led a raid on the federal armory at Harpers Ferry in an attempt to initiate a slave rebellion in the United States."
  ],
  1860: [
      "Giuseppe Garibaldi led the Expedition of the Thousand to Sicily, a key event in Italian unification.",
      "The Treaty of Tientsin was ratified, ending the Second Opium War and giving foreign powers more privileges in China."
  ],
  1861: [
      "The American Civil War began with the Confederate attack on Fort Sumter.",
      "Tsar Alexander II issued the Emancipation Reform, abolishing serfdom throughout the Russian Empire."
  ],
  1862: [
      "The Battle of Puebla took place where Mexican forces defeated the French army, now celebrated as Cinco de Mayo.",
      "The first London Underground railway opened between Paddington and Farringdon Street."
  ],
  1863: [
      "President Abraham Lincoln issued the Emancipation Proclamation, declaring slaves in Confederate states to be free.",
      "King Norodom signed a treaty establishing a French protectorate over Cambodia."
  ],
  1864: [
      "The First Geneva Convention was adopted in Switzerland, establishing the International Red Cross and laying groundwork for modern humanitarian law.",
      "The War of the Triple Alliance began, with Argentina, Brazil, and Uruguay allying against Paraguay."
  ],
  1865: [
      "The American Civil War ended and President Abraham Lincoln was assassinated.",
      "King Leopold II ascended to the Belgian throne and began planning what would become the Congo Free State."
  ],
  1866: [
      "The Austro-Prussian War was fought, leading to Prussian dominance among German states.",
      "The last Shogun, Tokugawa Yoshinobu, took power in Japan during the final years of the Tokugawa shogunate."
  ],
  1867: [
      "The Dominion of Canada was formed through the British North America Act, uniting three British colonies.",
      "The Austro-Hungarian Compromise established the dual monarchy of Austria-Hungary."
  ],
  1868: [
      "The Meiji Restoration began in Japan, marking the end of the Tokugawa shogunate and the beginning of Japan's modernization.",
      "The Ten Years' War began, Cuba's first war of independence against Spanish rule."
  ],
  1869: [
      "The Suez Canal opened in Egypt, connecting the Mediterranean Sea to the Red Sea.",
      "The First Transcontinental Railroad was completed, linking the eastern and western United States by rail."
  ],
  1870: [
      "The Franco-Prussian War began, leading to the unification of Germany and the fall of Napoleon III in France.",
      "Italian troops entered Rome, completing Italian unification and ending the temporal power of the Pope."
  ],
  1871: [
      "The German Empire was proclaimed in the Hall of Mirrors at Versailles, unifying numerous German states.",
      "The feudal han system was abolished in Japan as part of the Meiji reforms, centralizing political power."
  ],
  1872: [
      "Yellowstone became the world's first national park in the United States.",
      "Japan's first railway line opened between Tokyo and Yokohama."
  ],
  1873: [
      "The Panic of 1873 began, triggering a global economic depression known as the 'Long Depression'.",
      "The Russians conquered Khiva in present-day Uzbekistan, expanding their control in Central Asia."
  ],
  1874: [
      "The first Impressionist exhibition was held in Paris, featuring works by Claude Monet, Edgar Degas, and others.",
      "The British annexed the Gold Coast (modern Ghana) as a colony."
  ],
  1875: [
      "The Civil Rights Act of 1875 was passed in the United States, prohibiting racial discrimination in public accommodations.",
      "Egypt sold its shares in the Suez Canal to the United Kingdom due to financial difficulties."
  ],
  1876: [
      "The Battle of Little Bighorn occurred, where Lakota, Northern Cheyenne, and Arapaho forces defeated Lt. Col. George Custer and the 7th Cavalry.",
      "The Ottoman Empire's first constitution was promulgated, establishing a parliamentary system."
  ],
  1877: [
      "Reconstruction ended in the United States with the withdrawal of federal troops from the South.",
      "The Satsuma Rebellion, led by Saigō Takamori, was suppressed, marking the end of the samurai era in Japan."
  ],
  1878: [
      "The Congress of Berlin reorganized territories in the Balkans, recognizing the independence of Romania, Serbia, and Montenegro.",
      "The first commercial telephone exchange opened in New Haven, Connecticut."
  ],
  1879: [
      "The Anglo-Zulu War began with the British invasion of Zululand in Southern Africa.",
      "Thomas Edison demonstrated the first practical incandescent light bulb in the United States."
  ],
  1880: [
      "The First Boer War began between the United Kingdom and the South African Republic.",
      "The Marseillaise was restored as the French national anthem after being banned during the Second Empire."
  ],
  1881: [
      "President James A. Garfield was assassinated by Charles J. Guiteau in the United States.",
      "France established a protectorate over Tunisia in North Africa."
  ],
  1882: [
      "The British occupied Egypt, effectively taking control while maintaining nominal Ottoman sovereignty.",
      "The Chinese Exclusion Act was passed in the United States, prohibiting Chinese labor immigration."
  ],
  1883: [
      "Krakatoa volcano erupted in Indonesia, one of the most destructive volcanic events in recorded history.",
      "The Brooklyn Bridge opened, connecting Manhattan and Brooklyn in New York City."
  ],
  1884: [
      "The Berlin Conference began, formalizing the 'Scramble for Africa' among European powers.",
      "The first metal-frame skyscraper, the Home Insurance Building, was constructed in Chicago."
  ],
  1885: [
      "The Northwest Rebellion of Métis and First Nations was suppressed by Canadian forces.",
      "The Congo Free State was established as a personal possession of King Leopold II of Belgium."
  ],
  1886: [
      "The Haymarket affair occurred in Chicago, a pivotal event in the history of labor rights.",
      "The Third Anglo-Burmese War ended with British annexation of Burma (Myanmar)."
  ],
  1887: [
      "The Dawes Act was passed in the United States, aimed at assimilating Native Americans by dividing tribal land into individual plots.",
      "The Bayonet Constitution was forced upon King Kalākaua, stripping the Hawaiian monarchy of much of its authority."
  ],
  1888: [
      "Princess Isabel signed the Golden Law, abolishing slavery in Brazil.",
      "The serial killer known as Jack the Ripper murdered at least five women in the Whitechapel district of London."
  ],
  1889: [
      "The Meiji Constitution was promulgated, establishing Japan as a constitutional monarchy.",
      "The Brazilian monarchy was overthrown in a military coup, establishing the First Brazilian Republic."
  ],
  1890: [
      "The Wounded Knee Massacre occurred, with U.S. forces killing hundreds of Lakota Sioux, marking the end of the American Indian Wars.",
      "Chancellor Otto von Bismarck was dismissed by Emperor Wilhelm II, ending his dominance in German politics."
  ]
};
