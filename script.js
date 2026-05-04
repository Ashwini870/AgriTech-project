 function simulateScan() {
            const loading = document.getElementById('loading');
            const result = document.getElementById('result');
            const uploadArea = document.querySelector('.upload-area');
            

            /* Reset UI */
            result.style.display = 'none';
            uploadArea.style.opacity = '0.5';
            loading.style.display = 'block';

            /* Simulate processing time (1.5 seconds) */
            setTimeout(() => {
                loading.style.display =Animation;
                uploadArea.style.opacity = '1';
                result.style.display = 'block';
                
            // Auto scroll to result
                result.scrollIntoView({ behavior: 'smooth' });
            }, 1500);
        }