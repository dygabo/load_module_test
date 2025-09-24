# load_module_test

`npm run start` => starts without any customization hooks, `Module_load` is triggered

`npm run start-with-hooks` => starts with async customization hooks, `Module_load` is triggered, worker thread for laoder created

`npm run start-with-sync-hooks` => starts with sync customization hooks, `Module_load` is *not* triggered, if `load` hook is not available, `Module._load` gets called, `evaluate` hook is not triggered for `builtins`

