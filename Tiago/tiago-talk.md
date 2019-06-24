# Historical linguistics

- Historical linguistics is the scientific study of linguistic change and
evolution in time. It can take many forms:

  - comparative linguistics
  - dialectology and sociolinguistics
  - phonology and psycholinguistic
  - philology and philosophy of language

- Frequently assumed to be only the comparative method, or even only
Indo-European studies

- Fascination with the proto-forms
  - English "water" comes from Proto-Germanic \*watōr, from PIE \*wódr̥
  - Mandarin 水 shuǐ comes from Old Chinese \*lhuiʔ ("that which flows"),
    from Proto-Sino-Tibetan \*lwi(j) ("flow, stream")

# Splits tree

# Bayesian network

# History of the comparative method

- Classical though in Europe and Asia recognized long ago that
  - Different languages had similiaries that could not be explained by chance
    alone
  - Language, as shown by written records, change
- As a part of philology, historical linguistics is born as a "hot"
  science in the 17th century
  - Colonial enterprises, e.g. Van Boxhorn (1612-1653) and William Wotton
    reconstructions (1713)
  - Religious missions, especially from Jesuits, e.g. Matteo Ricci and
    Xu Guangqi 徐光啓 (16th-17th century) and Lorenzo Hervás (1735-1809)
- "Orientalism" as in the case of William Jones' discourse to the Asiatic
  Society (1786)

# Trees

Moving to scales to trees

# Comparative method

- Heavy investment in German on the "indo-germanic" studies
- Influence of Darwin
- Neogrammarian "tenets"
  - We don't observe the language, but its surface
  - The sequences of sounds ("words") are the most essential of a language
    and indepent of morphology, syntax, semantics, etc.
  - Sound changes are regular, and if not regular can be explained by other
    regular processes like analogy
  - Sound changes are immediate

# Comparative method

- Data collection
- Cognate identification
- Correspondence study
- Form reconstruction by means of sound changes
- Typological analysis
- Repeat

# Quantitative turn

- Statistics have been used since the beginning, such as in Sapir (1916)
- Computational methods begin with lexicostatistics and glottochronology
  in the 1950s
  - Morris Swadesh and his lists
  - Joseph Greenberg
  - Sergei Starostin and the Moscow School

# Cladistics and phylogenetics

- "Computational Phylogenetics in Historical Linguistics" by Donald Ringe
  in the early 1990s
- Media coverage with Gray & Atkison (2003)
  - Heavy reaction by traditional comparatists
  - Progressively more phylogenetic analyses are being published

# Methods

- Alignment

Align cognates for 水 such as Hakha "tîi", Bunan "tɕʰu",
Burmish (Rangoon) "je²²", Beijing "ʂuəi²¹⁴", Guangzhou "søy³⁵",
Jieyang "tsui³¹", Kiranti "ti", rGyalrong (Daofu) "ɣrə".

  | Language          | Alignments                 |
  |-------------------|---|-----|---|----|-----|
  | Hakha             | - | t   | - | iː | -   |
  | Bunan             | - | tɕʰ | - | u  | -   |
  | Burmish (Rangoon) | - | j   | - | e  | ²²  |
  | Beijing           | - | ʂ   | u | əi | ²¹⁴ |
  | Guangzhou         | - | s   | ø | y  | ³⁵  |
  | Jieyang           | - | ts  | u | i  | ³¹  |
  | Kiranti           | - | t   | - | i  | -   |
  | rGyalrong (Daofu) | ɣ | r   | - | ə  | -   |

a potential alignment

Sequence alignment algorithms from bioinformatics such as
Needleman-Wunsch and Smith-Waterman, as implemented in LingPy.


- Cognate detection

Cognate detection is a partitioning (i.e., clustering) task which does
not necessarily assume internal hierarchy.

  - Edit distance
  
From Jieyang "tsui³¹" to Kiranti "ti", when already segmented and
aligned,

  | Edits | Rule           | Alignment          |
  | 0     |                | ts  | u | i  | ³¹  |
  | 1     | Delete tone    | ts  | u | i  | -   |
  | 2     | Delete vowel   | ts  | - | i  | -   |
  | 3     | Change initial | t   | - | i  | -   |
  
Three changes, that normalized by length of the alignment give a score of
1.0 - (3/4) = 0.75.

Every difference is equal, so that Beijing "ʂuəi²¹⁴" to
Guangzhou "søy³⁵" has a score of
0.0 (the initial, the medial, the nucleus, the coda, and tone are different).

Word pairs are considered cognates if they score below a given value, which
can be defined in term of the distribution of the pair scores among languages.

- Dolgo

Early approaches solved this with sound classes, either based on
articulatory features or common patterns of development of sound changes,
where, for example, Beijing "ʂuəi²¹⁴" is 'S', 'Y', 'E', '0', '6' and
Guangzhou "søy³⁵" is 'S', 'U', 'Y', '2'.

Alternatives, mostly inspired from biology, flat clustering algorithm:
either hierarchical clustering or graph-based. Linguistic extensions
develop on the sound class model with enhanced sound-class models
(such as SCA, that incorpirates prosodic strings), and LexStat, which
uses a permutation method to compute individual segmental similarities
fed to an alignment algorithm (thus allowing an instructed alignment),
to PMI similarity approach or Support Vector Machines.

- Correspondences

Network method
Mattis paper

# Projects

- WALS
- Glottolog
- Concepticon
- CLICS

ba1 - 八 EIGHT / 疤 SCAR
gen1 - 跟 FOLLOW / 根 ROOT

# needs

good data
allows more stuff
