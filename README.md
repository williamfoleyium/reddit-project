Wireframe folder structure:
src/
├── assets/
├── components/
│   ├── common/            # Reusable components
│   │   ├── Button/
│   │   ├── Loading/
│   │   └── Error/
│   └── Post/             # Move all post-related components here
│       ├── PostCard/     # Main post component
│       ├── UserInfo/
│       ├── Title/
│       ├── Content/      # Instead of image-text (more generic)
│       ├── VoteButtons/
│       ├── Comments/
│       └── PostTime/
├── features/             # Redux slices/features
│   ├── posts/
│   │   ├── postsSlice.js
│   │   └── postsAPI.js
│   └── comments/
│       ├── commentsSlice.js
│       └── commentsAPI.js
├── store/               # Redux store configuration
│   └── index.js
├── styles/
├── utils/              # Helper functions, constants, etc.
├── hooks/             # Custom hooks
└── App.js