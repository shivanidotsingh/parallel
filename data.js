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
  ],
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
  ],
   1891:  [
      "The Italo-Ethiopian Treaty was signed, establishing a protectorate over Ethiopia, though Ethiopia maintained this was a mistranslation and asserted its independence.",
      "Construction began on the Trans-Siberian Railway, connecting Moscow with the Russian Far East."
  ],
  1892:  [
      "Ellis Island opened as an immigration station in New York Harbor, processing millions of immigrants to the United States.",
      "The Dalmatian town of Fiume (now Rijeka, Croatia) rebelled against Habsburg rule."
  ],
  1893:  [
      "New Zealand became the first self-governing country to grant women the right to vote.",
      "The Kingdom of Hawaii was overthrown by American settlers and businessmen with the assistance of U.S. Marines."
  ],
  1894:  [
      "The First Sino-Japanese War began between China and Japan, primarily over control of Korea.",
      "Alfred Dreyfus, a French artillery officer of Jewish descent, was convicted of treason in a case that would divide France."
  ],
  1895: [
      "Wilhelm Röntgen discovered X-rays, revolutionizing medical diagnostics.",
      "Cuba's War of Independence began against Spanish colonial rule."
  ],
  1896: [
      "The first modern Olympic Games were held in Athens, Greece.",
      "Ethiopia defeated Italy at the Battle of Adwa, maintaining its independence against European colonization."
  ],
  1897: [
      "The Klondike Gold Rush began in the Yukon region of Canada, attracting approximately 100,000 prospectors.",
      "The first subway in continental Europe opened in Budapest, Hungary."
  ],
  1898: [
      "The Spanish-American War began, resulting in Spain's loss of its remaining colonies in the Americas and Pacific.",
      "Marie and Pierre Curie discovered the elements radium and polonium."
  ],
  1899: [
      "The Second Boer War began between the British Empire and two Boer states in South Africa.",
      "The Open Door Policy was announced, proposing to keep China open to trade with all countries on an equal basis."
  ],
  1900: [
      "The Boxer Rebellion reached its peak in China, with anti-foreign forces besieging diplomatic compounds in Beijing.",
      "Max Planck formulated quantum theory, revolutionizing our understanding of atomic and subatomic processes."
  ],
  1901: [
      "Australia became a federation, uniting six British colonies into one nation.",
      "U.S. President William McKinley was assassinated by anarchist Leon Czolgosz, and Theodore Roosevelt became president."
  ],
  1902: [
      "The Second Boer War ended with the Treaty of Vereeniging, establishing British control over South Africa.",
      "Mont Pelée erupted on Martinique, destroying the city of Saint-Pierre and killing about 30,000 people."
  ],
  1903: [
      "The Wright brothers made the first controlled, sustained flight of a powered aircraft at Kitty Hawk, North Carolina.",
      "A coup d'état in Serbia overthrew the Obrenović dynasty, bringing King Peter I Karađorđević to power."
  ],
  1904: [
      "The Russo-Japanese War began, the first major military victory of an Asian power over a European nation in the modern era.",
      "The construction of the Panama Canal was undertaken by the United States following the failure of a French attempt."
  ],
  1905: [
      "Albert Einstein published his Special Theory of Relativity, revolutionizing our understanding of physics.",
      "The Russo-Japanese War ended with the Treaty of Portsmouth, mediated by U.S. President Theodore Roosevelt."
  ],
  1906: [
      "A massive earthquake struck San Francisco, destroying over 80% of the city and killing more than 3,000 people.",
      "The Dreyfus Affair concluded with the exoneration and reinstatement of Alfred Dreyfus in the French Army."
  ],
  1907: [
      "The Triple Entente was formed between the United Kingdom, France, and Russia.",
      "New Zealand was granted dominion status within the British Empire."
  ],
  1908: [
      "The Young Turk Revolution began in the Ottoman Empire, aiming to replace the absolute monarchy with a constitutional government.",
      "A massive explosion occurred near the Tunguska River in Siberia, flattening an estimated 80 million trees over 2,150 square kilometers."
  ],
  1909: [
      "Robert Peary claimed to have reached the North Pole, though his claim remains disputed.",
      "The National Association for the Advancement of Colored People (NAACP) was founded in the United States."
  ],
  1910: [
      "The Mexican Revolution began, a major armed struggle that transformed Mexican culture and government.",
      "Japan annexed Korea, beginning a 35-year period of colonial rule."
  ],
  1911: [
      "The Xinhai Revolution overthrew China's Qing Dynasty, ending more than 2,000 years of imperial rule.",
      "Roald Amundsen reached the South Pole, becoming the first explorer to do so."
  ],
  1912: [
      "The RMS Titanic sank in the North Atlantic Ocean after colliding with an iceberg, killing more than 1,500 people.",
      "The Republic of China was established following the Xinhai Revolution, with Sun Yat-sen as its provisional president."
  ],
  1913: [
      "The 16th Amendment to the U.S. Constitution was ratified, authorizing the federal government to impose an income tax.",
      "The Second Balkan War began when Bulgaria attacked its former allies Serbia and Greece."
  ],
  1914: [
      "Archduke Franz Ferdinand of Austria was assassinated in Sarajevo, precipitating World War I.",
      "The Panama Canal officially opened, connecting the Atlantic and Pacific Oceans."
  ],
  1915: [
      "The Ottoman Empire began the Armenian Genocide, systematically killing an estimated 1.5 million Armenians.",
      "Albert Einstein presented his General Theory of Relativity."
  ],
  1916: [
      "The Easter Rising took place in Ireland, an armed rebellion against British rule during Easter Week.",
      "The Battle of the Somme began during World War I, one of the bloodiest battles in human history."
  ],
  1917: [
      "The Russian Revolution overthrew the Tsarist autocracy and led to the rise of the Soviet Union.",
      "The United States entered World War I, joining the Allies against the Central Powers."
  ],
  1918: [
      "World War I ended with the signing of the Armistice at Compiègne, France.",
      "The Spanish Flu pandemic began, eventually killing an estimated 50-100 million people worldwide."
  ],
  1919: [
      "The Treaty of Versailles was signed, officially ending World War I and establishing the League of Nations.",
      "The 19th Amendment to the U.S. Constitution was passed by Congress, guaranteeing women's suffrage."
  ],
  1920: [
      "The League of Nations held its first meeting in Geneva, Switzerland.",
      "The Mexican Revolution ended with Álvaro Obregón becoming president of Mexico."
  ],
  1921: [
      "The Irish War of Independence ended with the Anglo-Irish Treaty, establishing the Irish Free State.",
      "The Chinese Communist Party was founded in Shanghai."
  ],
  1922: [
      "The Tomb of Tutankhamun was discovered by Howard Carter in Egypt's Valley of the Kings.",
      "The Union of Soviet Socialist Republics (USSR) was established."
  ],
  1923: [
      "The Great Kantō earthquake struck Japan, devastating Tokyo, Yokohama, and surrounding areas.",
      "Hyperinflation peaked in the Weimar Republic of Germany, with prices doubling every few days."
  ],
  1924: [
      "Vladimir Lenin died, leading to a power struggle in the Soviet Union that was eventually won by Joseph Stalin.",
      "The Dawes Plan was accepted, aimed at resolving the World War I reparations Germany had to pay."
  ],
  1925: [
      "The Scopes Trial (Monkey Trial) took place in Tennessee, testing a law prohibiting the teaching of evolution.",
      "Benito Mussolini announced the beginning of fascist dictatorship in Italy."
  ],
  1926: [
      "The General Strike began in the United Kingdom in support of coal miners refusing to accept lower wages.",
      "The National Broadcasting Company (NBC) was founded as the first major broadcast network in the United States."
  ],
  1927: [
      "Charles Lindbergh made the first solo non-stop transatlantic flight from New York to Paris.",
      "The Chinese Civil War began between the Kuomintang and the Communist Party of China."
  ],
  1928: [
      "Alexander Fleming discovered penicillin, beginning the era of antibiotics.",
      "The Kellogg–Briand Pact was signed, renouncing war as an instrument of national policy."
  ],
  1929: [
      "The Wall Street Crash occurred, initiating the Great Depression.",
      "The Vatican City became an independent state through the Lateran Treaty with Italy."
  ],
  1930: [
      "The Salt March was led by Mahatma Gandhi to protest the British salt monopoly in India.",
      "Haile Selassie was crowned Emperor of Ethiopia, the last Ethiopian monarch."
  ],
  1931: [
      "The Empire State Building was completed in New York City, becoming the world's tallest building at the time.",
      "Japan invaded Manchuria, beginning the Second Sino-Japanese War."
  ],
  1932: [
      "The Sydney Harbour Bridge opened in Australia.",
      "The Holodomor, a man-made famine, began in Soviet Ukraine, killing millions of Ukrainians."
  ],
  1933: [
      "Adolf Hitler was appointed Chancellor of Germany, beginning the Third Reich.",
      "The New Deal was launched by U.S. President Franklin D. Roosevelt to combat the Great Depression."
  ],
  1934: [
      "The Long March of the Chinese Communists began, a retreat from the Kuomintang forces.",
      "The Soviet Union joined the League of Nations."
  ],
  1935: [
      "Italy invaded Ethiopia, starting the Second Italo-Ethiopian War.",
      "The Nuremberg Laws were enacted in Nazi Germany, institutionalizing racial discrimination against Jews."
  ],
  1936: [
      "The Spanish Civil War began between the Republicans and the Nationalists led by General Francisco Franco.",
      "The Summer Olympics were held in Berlin, Germany under the Nazi regime."
  ],
  1937: [
      "The Nanjing Massacre occurred during the Second Sino-Japanese War.",
      "The Hindenburg disaster took place when the German passenger airship caught fire and was destroyed."
  ],
  1938: [
      "The Munich Agreement was signed, allowing Nazi Germany to annex the Sudetenland from Czechoslovakia.",
      "Orson Welles' radio broadcast of 'The War of the Worlds' caused panic among listeners who believed it was an actual news report."
  ],
  1939: [
      "World War II began with Nazi Germany's invasion of Poland.",
      "The Winter War began when the Soviet Union invaded Finland."
  ],
  1940: [
      "The Battle of Britain took place, a military campaign of the German Air Force against the United Kingdom.",
      "The first McDonald's restaurant was opened by Richard and Maurice McDonald in San Bernardino, California."
  ],
  1941: [
      "Japan attacked Pearl Harbor, leading to the United States' entry into World War II.",
      "The siege of Leningrad began, one of the longest and most destructive sieges in history."
  ],
  1942: [
      "The Battle of Stalingrad began, a major turning point in World War II.",
      "The Manhattan Project began, a research and development project that produced the first nuclear weapons."
  ],
  1943: [
      "The Warsaw Ghetto Uprising took place, the largest Jewish resistance during World War II.",
      "The Cairo Conference was held, with Roosevelt, Churchill, and Chiang Kai-shek planning the Allied position against Japan."
  ],
  1944: [
      "The Normandy landings (D-Day) took place, the largest seaborne invasion in history.",
      "The Bretton Woods Agreement established the International Monetary Fund and the World Bank."
  ],
  1945: [
      "World War II ended with the surrender of Japan following the atomic bombings of Hiroshima and Nagasaki.",
      "The United Nations was established to promote international cooperation and prevent future conflicts."
  ],
  1946: [
      "The first session of the United Nations General Assembly opened in London.",
      "The Republic of the Philippines gained independence from the United States."
  ],
  1947: [
      "India and Pakistan gained independence from British rule.",
      "The Truman Doctrine was announced, stating that the United States would provide political, military, and economic assistance to democratic nations under threat."
  ],
  1948: [
      "The State of Israel was established, following the United Nations Partition Plan for Palestine.",
      "The apartheid system was officially instituted in South Africa by the National Party."
  ],
  1949: [
      "The North Atlantic Treaty Organization (NATO) was established.",
      "The People's Republic of China was proclaimed by Mao Zedong following the Chinese Communist Revolution."
  ],
1950: [
    "The Korean War began when North Korea invaded South Korea.",
    "The first credit card (Diners Club) was introduced in the United States."
  ],
  1951: [
    "Julius and Ethel Rosenberg were convicted of espionage in the United States.",
    "Libya gained independence from Italian control under King Idris."
  ],
  1952: [
    "Elizabeth II became Queen of the United Kingdom following the death of her father, King George VI.",
    "The polio epidemic reached its peak in the United States with over 57,000 cases reported."
  ],
  1953: [
    "DNA's double helix structure was discovered by James Watson and Francis Crick.",
    "Joseph Stalin, leader of the Soviet Union, died after nearly 30 years in power."
  ],
  1954: [
    "The Brown v. Board of Education Supreme Court decision ruled that racial segregation in public schools was unconstitutional.",
    "The first nuclear-powered submarine, USS Nautilus, was launched."
  ],
  1955: [
    "Rosa Parks refused to give up her seat on a Montgomery, Alabama bus, inspiring the civil rights movement.",
    "The Warsaw Pact was established as a military alliance of communist countries in Eastern Europe."
  ],
  1956: [
    "The Suez Crisis occurred when Israel, Britain, and France invaded Egypt after the nationalization of the Suez Canal.",
    "The Hungarian Revolution against Soviet control was violently suppressed by Soviet forces."
  ],
  1957: [
    "The Soviet Union launched Sputnik 1, the first artificial Earth satellite, beginning the Space Age.",
    "Ghana became the first sub-Saharan African nation to gain independence from colonial rule."
  ],
  1958: [
    "The European Economic Community (precursor to the EU) was established.",
    "NASA, the National Aeronautics and Space Administration, was formed in the United States."
  ],
  1959: [
    "The Cuban Revolution succeeded as Fidel Castro overthrew the Batista regime.",
    "The first Barbie doll was introduced by Mattel at the American Toy Fair."
  ],
  1960: [
    "The birth control pill was approved for contraceptive use in the United States.",
    "Seventeen African nations achieved independence from European colonial powers in what became known as the 'Year of Africa'."
  ],
  1961: [
    "The Berlin Wall was erected, physically dividing East and West Berlin.",
    "Yuri Gagarin became the first human to journey into outer space, orbiting Earth in the Vostok 1 spacecraft."
  ],
  1962: [
    "The Cuban Missile Crisis brought the United States and Soviet Union to the brink of nuclear conflict.",
    "Algeria gained independence from France after an eight-year war."
  ],
  1963: [
    "U.S. President John F. Kennedy was assassinated in Dallas, Texas.",
    "Martin Luther King Jr. delivered his 'I Have a Dream' speech during the March on Washington."
  ],
  1964: [
    "The Civil Rights Act was signed into law in the United States, prohibiting discrimination based on race, color, religion, sex, or national origin.",
    "The Beatles made their first appearance on The Ed Sullivan Show, marking the beginning of 'Beatlemania' in America."
  ],
  1965: [
    "The United States began regular bombing raids on North Vietnam in Operation Rolling Thunder.",
    "Malcolm X was assassinated while giving a speech in New York City."
  ],
  1966: [
    "The Cultural Revolution began in China under Chairman Mao Zedong.",
    "England won the FIFA World Cup, defeating West Germany in the final."
  ],
  1967: [
    "The Six-Day War was fought between Israel and neighboring states of Egypt, Jordan, and Syria.",
    "The world's first heart transplant was performed by Dr. Christiaan Barnard in South Africa."
  ],
  1968: [
    "Martin Luther King Jr. and Robert F. Kennedy were both assassinated in separate incidents.",
    "The Prague Spring reforms in Czechoslovakia were crushed by Soviet invasion."
  ],
  1969: [
    "Apollo 11 astronauts Neil Armstrong and Buzz Aldrin became the first humans to walk on the Moon.",
    "The Woodstock Music Festival was held in upstate New York, becoming a defining moment for the counterculture generation."
  ],
  1970: [
    "The Beatles officially broke up after a decade of transforming popular music.",
    "The first Earth Day was observed, marking the birth of the modern environmental movement."
  ],
  1971: [
    "The Pentagon Papers were published, revealing previously secret information about the Vietnam War.",
    "Bangladesh declared independence from Pakistan after a nine-month war."
  ],
  1972: [
    "The Watergate scandal began with the arrest of five men for breaking into the Democratic National Committee headquarters.",
    "Eleven Israeli athletes were killed by Palestinian terrorists at the Munich Olympics."
  ],
  1973: [
    "The United States Supreme Court's Roe v. Wade decision legalized abortion nationwide.",
    "The 1973 oil crisis began when OPEC countries proclaimed an oil embargo."
  ],
  1974: [
    "U.S. President Richard Nixon resigned due to the Watergate scandal.",
    "The Terracotta Army was discovered in Xi'an, China, one of the greatest archaeological finds of the 20th century."
  ],
  1975: [
    "The Vietnam War ended with the fall of Saigon to North Vietnamese forces.",
    "Microsoft Corporation was founded by Bill Gates and Paul Allen."
  ],
  1976: [
    "The Apple Computer Company was formed by Steve Jobs and Steve Wozniak.",
    "The Soweto uprising began in South Africa when black students protested against the introduction of Afrikaans as a medium of instruction."
  ],
  1977: [
    "Elvis Presley, the 'King of Rock and Roll,' died at his Graceland estate in Memphis, Tennessee.",
    "The first commercial flight of the Concorde supersonic passenger airliner took place."
  ],
  1978: [
    "The Camp David Accords were signed by Egyptian President Anwar Sadat and Israeli Prime Minister Menachem Begin.",
    "The world's first test tube baby, Louise Brown, was born in England."
  ],
  1979: [
    "The Iranian Revolution overthrew the Shah and established an Islamic Republic under Ayatollah Khomeini.",
    "Margaret Thatcher became the first female Prime Minister of the United Kingdom."
  ],
  1980: [
    "Mount St. Helens erupted in Washington state, causing widespread destruction.",
    "John Lennon, former member of The Beatles, was shot and killed outside his New York City apartment."
  ],
  1981: [
    "AIDS was first identified by the U.S. Centers for Disease Control and Prevention.",
    "The first space shuttle, Columbia, was launched by NASA."
  ],
  1982: [
    "The Falklands War was fought between Argentina and the United Kingdom over the disputed Falkland Islands.",
    "Canada officially gained complete independence from the United Kingdom with the patriation of its constitution."
  ],
  1983: [
    "The U.S. invasion of Grenada, code-named Operation Urgent Fury, was launched.",
    "The Internet's Domain Name System (DNS) was invented, creating the system of .com, .org, and other domains."
  ],
  1984: [
    "The deadly gas leak at the Union Carbide plant in Bhopal, India killed thousands in the world's worst industrial disaster.",
    "Indira Gandhi, Prime Minister of India, was assassinated by her Sikh bodyguards."
  ],
  1985: [
    "The Live Aid concert was held simultaneously in London and Philadelphia to raise funds for Ethiopian famine relief.",
    "Mikhail Gorbachev became the leader of the Soviet Union, beginning the era of perestroika and glasnost."
  ],
  1986: [
    "The Space Shuttle Challenger disaster killed all seven crew members shortly after launch.",
    "The Chernobyl nuclear disaster occurred in Ukraine, then part of the Soviet Union."
  ],
  1987: [
    "The stock market experienced 'Black Monday,' when the Dow Jones Industrial Average fell by 22% in a single day.",
    "The Intermediate-Range Nuclear Forces Treaty was signed by the U.S. and Soviet Union."
  ],
  1988: [
    "The Soviet Union began withdrawing its troops from Afghanistan after a nine-year conflict.",
    "Pan Am Flight 103 was destroyed by a bomb over Lockerbie, Scotland, killing 270 people."
  ],
  1989: [
    "The Berlin Wall fell as East Germany opened its borders, symbolizing the end of the Cold War.",
    "The Tiananmen Square protests in China were violently suppressed by the government."
  ],
  1990: [
    "Nelson Mandela was released from prison in South Africa after 27 years of incarceration.",
    "Iraq invaded Kuwait, leading to the Gulf War."
  ]
  
};
